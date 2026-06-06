"use client";

import { useState } from "react";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import WhatsAppModal from "./components/WhatsAppModal";

export default function Home() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const openWhatsApp = () => setWhatsappOpen(true);

  const handleMainCTA = () => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("coinvergence_user") : null;
    if (stored) {
      setWhatsappOpen(true);
    } else {
      setAuthMode("signup");
      setAuthOpen(true);
    }
  };

  return (
    <AuthProvider>
      <main className="min-h-screen bg-[#0a0a0f] text-white">
        <Navbar onOpenAuth={openAuth} onOpenWhatsApp={openWhatsApp} />
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} defaultMode={authMode} />
        <WhatsAppModal isOpen={whatsappOpen} onClose={() => setWhatsappOpen(false)} />

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
              The safest P2P marketplace for crypto, gift cards, domains, and brand-ready digital assets. Buy & sell with escrow protection and instant settlement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleMainCTA} className="bg-gradient-to-r from-violet-600 to-blue-600 text-base font-semibold px-8 py-4 rounded-2xl text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                Start Trading Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <button onClick={() => document.getElementById("howItWorks")?.scrollIntoView({ behavior: "smooth" })} className="bg-white/[0.03] backdrop-blur-xl border border-white/5 text-base font-medium px-8 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto">
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
              <p className="text-gray-400">Four simple steps to start trading safely on Coinvergence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Create Account", desc: "Sign up in under 30 seconds. No KYC required to browse.", icon: "user", action: () => openAuth("signup") },
                { num: "2", title: "Browse Listings", desc: "Filter by category, price, payment method, and seller rating.", icon: "search" },
                { num: "3", title: "Connect on WhatsApp", desc: "Message verified sellers directly. Negotiate rates and terms.", icon: "message" },
                { num: "4", title: "Instant Settlement", desc: "Confirm receipt and complete the trade. Rate your partner.", icon: "zap" },
              ].map((step) => (
                <div key={step.num} onClick={step.action} className={`bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative group hover:bg-white/5 transition-all ${step.action ? "cursor-pointer" : ""}`}>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center text-sm font-bold">{step.num}</div>
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {step.icon === "user" && <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                    {step.icon === "search" && <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                    {step.icon === "message" && <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                    {step.icon === "zap" && <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                  {step.action && (
                    <button className="mt-4 text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
                      Sign Up <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
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
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join thousands of traders buying and selling on the most secure P2P marketplace. Start trading in minutes via WhatsApp.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                {["No fees for first 30 days", "WhatsApp trading in 2 min", "24/7 support included"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </div>
                ))}
              </div>
              <button onClick={handleMainCTA} className="bg-gradient-to-r from-green-500 to-green-600 text-base font-semibold px-8 py-4 rounded-2xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2 mx-auto">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start Trading on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
    </AuthProvider>
  );
}
