"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Zap, ChevronDown, MessageCircle, LogOut, Menu, X } from "lucide-react";

export default function Navbar({ onOpenAuth, onOpenWhatsApp }) {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = user?.name?.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) || "??";
  const firstName = user?.name?.split(" ")[0] || "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/[0.03] backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center">
              <Zap size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Coinvergence</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#marketplace" className="text-sm text-gray-400 hover:text-white transition-colors">Marketplace</a>
            <a href="#crypto" className="text-sm text-gray-400 hover:text-white transition-colors">Crypto</a>
            <a href="#giftcards" className="text-sm text-gray-400 hover:text-white transition-colors">Gift Cards</a>
            <a href="#domains" className="text-sm text-gray-400 hover:text-white transition-colors">Domains</a>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Online</span>
                </div>
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/5 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                      {initials}
                    </div>
                    <span className="text-sm text-gray-300 hidden sm:block">{firstName}</span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 top-12 w-56 bg-[#0f0f1a] border border-white/10 rounded-xl p-2 shadow-2xl">
                      <div className="px-3 py-2 border-b border-white/5 mb-1">
                        <p className="text-sm font-medium text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <button onClick={() => { setDropdownOpen(false); onOpenWhatsApp(); }} className="w-full text-left px-3 py-2 rounded-lg text-sm text-green-400 hover:bg-white/5 transition-colors flex items-center gap-2">
                        <MessageCircle size={16} />
                        Trade on WhatsApp
                      </button>
                      <button onClick={() => { setDropdownOpen(false); logout(); }} className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-white/5 transition-colors flex items-center gap-2">
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <button onClick={() => onOpenAuth("signin")} className="hidden sm:block text-sm text-gray-300 hover:text-white transition-colors px-3 py-2">Sign In</button>
                <button onClick={() => onOpenAuth("signup")} className="bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-medium px-5 py-2.5 rounded-xl text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all">Get Started</button>
              </>
            )}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-400 hover:text-white">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-white/5 px-4 py-4 space-y-3">
          <a href="#marketplace" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-white">Marketplace</a>
          <a href="#crypto" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-white">Crypto</a>
          <a href="#giftcards" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-white">Gift Cards</a>
          <a href="#domains" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-white">Domains</a>
          {user ? (
            <button onClick={() => { setMobileOpen(false); onOpenWhatsApp(); }} className="w-full text-left text-sm text-green-400 flex items-center gap-2 py-2">
              <MessageCircle size={16} /> Trade on WhatsApp
            </button>
          ) : (
            <button onClick={() => { setMobileOpen(false); onOpenAuth("signup"); }} className="w-full text-left text-sm text-violet-400 py-2">Get Started</button>
          )}
        </div>
      )}
    </nav>
  );
}
