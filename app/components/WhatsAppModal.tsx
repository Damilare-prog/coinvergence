"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "2349133588720";

export default function WhatsAppModal({ isOpen, onClose }) {
  const [tradeType, setTradeType] = useState("buy");
  const [assetType, setAssetType] = useState("crypto");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [crypto, setCrypto] = useState("Bitcoin (BTC)");
  const [giftcard, setGiftcard] = useState("Amazon");
  const [domain, setDomain] = useState("");
  const [growth, setGrowth] = useState("Social Growth Pack");

  if (!isOpen) return null;

  const getAsset = () => {
    if (assetType === "crypto") return crypto;
    if (assetType === "giftcard") return giftcard;
    if (assetType === "domain") return domain || "Premium Domain";
    return growth;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `🚀 *New Coinvergence Order*\n\nType: ${tradeType.toUpperCase()}\nAsset: ${getAsset()}\nAmount: ${amount}\nNotes: ${notes || "None"}\n\nReady to trade!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">Place Your Order</h3>
          <p className="text-sm text-gray-400">Tell us what you want to trade. We'll connect you on WhatsApp instantly.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">I want to</label>
            <div className="grid grid-cols-2 gap-3">
              {["buy", "sell"].map((t) => (
                <label key={t} className="cursor-pointer">
                  <input type="radio" name="tradeType" value={t} checked={tradeType === t} onChange={() => setTradeType(t)} className="peer hidden" />
                  <div className={`px-4 py-3 rounded-xl border text-center transition-all ${tradeType === t ? (t === "buy" ? "border-green-500 bg-green-500/10 text-green-400" : "border-violet-500 bg-violet-500/10 text-violet-400") : "border-white/10 text-gray-400"}`}>
                    <span className="text-sm font-medium capitalize">{t}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Asset Type</label>
            <select value={assetType} onChange={(e) => setAssetType(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-green-500 focus:outline-none transition-all">
              <option value="crypto" className="bg-[#0a0a0f]">Cryptocurrency</option>
              <option value="giftcard" className="bg-[#0a0a0f]">Gift Card</option>
              <option value="domain" className="bg-[#0a0a0f]">Premium Domain</option>
              <option value="growth" className="bg-[#0a0a0f]">Growth Service</option>
            </select>
          </div>

          {assetType === "crypto" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Select Crypto</label>
              <select value={crypto} onChange={(e) => setCrypto(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-green-500 focus:outline-none transition-all">
                {["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "USDT (TRC20)", "Other — specify in notes"].map((c) => (
                  <option key={c} value={c} className="bg-[#0a0a0f]">{c}</option>
                ))}
              </select>
            </div>
          )}

          {assetType === "giftcard" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Gift Card Brand</label>
              <select value={giftcard} onChange={(e) => setGiftcard(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-green-500 focus:outline-none transition-all">
                {["Amazon", "Apple", "Google Play", "Steam", "Visa Prepaid", "Other — specify in notes"].map((g) => (
                  <option key={g} value={g} className="bg-[#0a0a0f]">{g}</option>
                ))}
              </select>
            </div>
          )}

          {assetType === "domain" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Domain Name</label>
              <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="e.g., cryptovault.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all" />
            </div>
          )}

          {assetType === "growth" && (
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Service Type</label>
              <select value={growth} onChange={(e) => setGrowth(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-green-500 focus:outline-none transition-all">
                {["Social Growth Pack", "Brand Content Suite", "SEO Authority Pack", "Ad Strategy Consult", "Other — specify in notes"].map((g) => (
                  <option key={g} value={g} className="bg-[#0a0a0f]">{g}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Amount / Value</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} required placeholder="e.g., $500 or 0.05 BTC" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all" />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Notes (optional)</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} placeholder="Any specific requirements..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all resize-none" />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <MessageCircle size={20} />
            Send Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
