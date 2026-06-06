import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coinvergence — Digital Asset Marketplace",
  description: "The safest P2P marketplace for crypto, gift cards, domains, and brand-ready digital assets. Escrow-protected. KYC-verified. Instant settlement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
