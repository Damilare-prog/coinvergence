import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const BYBIT_API_KEY = process.env.BYBIT_API_KEY!;
const BYBIT_API_SECRET = process.env.BYBIT_API_SECRET!;
const BYBIT_BASE_URL = process.env.BYBIT_BASE_URL || 'https://api.bybit.com';

const SUPPORTED_COINS = {
  BTC: { chain: 'BTC', min: 50, name: 'Bitcoin' },
  ETH: { chain: 'ERC20', min: 50, name: 'Ethereum' },
  USDT: { chain: 'TRC20', min: 20, name: 'Tether' },
  SOL: { chain: 'SOL', min: 20, name: 'Solana' },
};

function generateSignature(timestamp: string, recvWindow: string, queryString: string): string {
  return crypto
    .createHmac('sha256', BYBIT_API_SECRET)
    .update(`${timestamp}${BYBIT_API_KEY}${recvWindow}${queryString}`)
    .digest('hex');
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const coin = (searchParams.get('coin') || 'BTC').toUpperCase();

    if (!SUPPORTED_COINS[coin as keyof typeof SUPPORTED_COINS]) {
      return NextResponse.json(
        { error: 'Unsupported coin', supported: Object.keys(SUPPORTED_COINS) },
        { status: 400 }
      );
    }

    const chainType = SUPPORTED_COINS[coin as keyof typeof SUPPORTED_COINS].chain;
    const timestamp = Date.now().toString();
    const recvWindow = '5000';
    const queryString = `coin=${coin}&chainType=${chainType}`;
    const signature = generateSignature(timestamp, recvWindow, queryString);

    const response = await fetch(
      `${BYBIT_BASE_URL}/v5/asset/deposit/query-address?${queryString}`,
      {
        method: 'GET',
        headers: {
          'X-BAPI-API-KEY': BYBIT_API_KEY,
          'X-BAPI-TIMESTAMP': timestamp,
          'X-BAPI-RECV-WINDOW': recvWindow,
          'X-BAPI-SIGN': signature,
        },
        cache: 'no-store',
      }
    );

    const data = await response.json();

    if (data.retCode !== 0) {
      console.error('Bybit API error:', data.retMsg);
      return NextResponse.json(
        { error: data.retMsg, code: data.retCode },
        { status: 400 }
      );
    }

    const address = data.result?.rows?.[0];

    if (!address) {
      return NextResponse.json(
        { error: 'No deposit address found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      coin,
      chain: chainType,
      name: SUPPORTED_COINS[coin as keyof typeof SUPPORTED_COINS].name,
      address: address.address,
      tag: address.tag || null,
      minAmount: SUPPORTED_COINS[coin as keyof typeof SUPPORTED_COINS].min,
    });

  } catch (error) {
    console.error('Deposit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
