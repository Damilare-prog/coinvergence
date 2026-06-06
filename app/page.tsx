"use client";

import { useState, FormEvent } from "react";

const WHATSAPP_NUMBER = "2349133588720";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [tradeType, setTradeType] = useState("buy");
  const [assetType, setAssetType] = useState("crypto");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");
  const [crypto, setCrypto] = useState("Bitcoin (BTC)");
  const [giftcard, setGiftcard] = useState("Amazon");
  const [domain, setDomain] = useState("");
  const [growth, setGrowth] = useState("Social Growth Pack");
  const [submitted, setSubmitted] = useState(false);

  const getAsset = () => {
    if (assetType === "crypto") return crypto;
    if (assetType === "giftcard") return giftcard;
    if (assetType === "domain") return domain || "Premium Domain";
    return growth;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `🚀 *New Coinvergence Order*\n\nType: ${tradeType.toUpperCase()}\nAsset: ${getAsset()}\nAmount: ${amount}\nNotes: ${notes || "None"}\n\nReady to trade!`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setAmount("");
      setNotes("");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/[0.03] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">Coinvergence</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#marketplace" className="text-sm text-gray-400 hover:text-white transition-colors">Marketplace</a>
              <a href="#crypto" className="text-sm text-gray-400 hover:text-white transition-colors">Crypto</a>
              <a href="#giftcards" className="text-sm text-gray-400 hover:text-white transition-colors">Gift Cards</a>
              <a href="#domains" className="text-sm text-gray-400 hover:text-white transition-colors">Domains</a>
            </div>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-sm font-medium px-5 py-2.5 rounded-xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Trade Now
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-400">Live Trading Active · 2,847 traders online</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Trade Digital Assets<br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">With Zero Hassle</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The safest P2P marketplace for crypto, gift cards, domains, and brand-ready digital assets. 
            Buy & sell directly via WhatsApp with instant settlement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-base font-semibold px-8 py-4 rounded-2xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Trading on WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById("howItWorks")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/5 text-base font-medium px-8 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howItWorks" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Three simple steps to start trading on Coinvergence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Choose Your Asset", desc: "Select crypto, gift cards, domains, or growth services.", icon: "search" },
              { num: "2", title: "Fill the Form", desc: "Tell us what you want to buy or sell and the amount.", icon: "form" },
              { num: "3", title: "Trade on WhatsApp", desc: "We connect you instantly with verified traders.", icon: "whatsapp" },
            ].map((step) => (
              <div key={step.num} className="bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative group hover:bg-white/5 transition-all">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-sm font-bold">{step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon === "search" && (
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                  {step.icon === "form" && (
                    <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {step.icon === "whatsapp" && (
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-blue-600/10" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              No sign-up needed. Just tell us what you want and we will connect you on WhatsApp instantly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {["No account required", "WhatsApp in 30 seconds", "24/7 trader network"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-base font-semibold px-8 py-4 rounded-2xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 mx-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Place Order on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-lg bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Opening WhatsApp...</h3>
                <p className="text-sm text-gray-400">Your order has been prepared.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Place Your Order</h3>
                  <p className="text-sm text-gray-400">Tell us what you want to trade. We will connect you on WhatsApp instantly.</p>
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Order via WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
