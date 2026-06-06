"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";
import { X, UserPlus, LogIn, ArrowRight, MessageCircle } from "lucide-react";

export default function AuthModal({ isOpen, onClose, defaultMode = "signup" }) {
  const { login } = useAuth();
  const [mode, setMode] = useState(defaultMode);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSignup = (e) => {
    e.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      createdAt: new Date().toISOString(),
    };
    login(user);
    setSuccess(true);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const name = formData.email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    login({ name, email: formData.email, phone: "", createdAt: new Date().toISOString() });
    setSuccess(true);
  };

  const openWhatsApp = () => {
    onClose();
    window.open("https://wa.me/2349133588720", "_blank");
  };

  const skipAndTrade = () => {
    onClose();
    window.open("https://wa.me/2349133588720", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0f0f1a] border border-white/10 rounded-2xl p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <X size={20} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{mode === "signup" ? "Account Created!" : "Welcome Back!"}</h3>
            <p className="text-sm text-gray-400 mb-6">You're ready to trade on WhatsApp.</p>
            <button onClick={openWhatsApp} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/20 transition-all">
              <MessageCircle size={20} />
              Start Trading on WhatsApp
            </button>
          </div>
        ) : mode === "signup" ? (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <UserPlus size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Create Account</h3>
              <p className="text-sm text-gray-400">Join Coinvergence in seconds</p>
            </div>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Full Name</label>
                <input name="name" required placeholder="John Doe" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input name="email" type="email" required placeholder="john@email.com" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Phone (for WhatsApp)</label>
                <input name="phone" type="tel" required placeholder="+234 913 358 8720" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Password</label>
                <input name="password" type="password" required minLength={6} placeholder="Min 6 characters" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <button type="submit" className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/20 transition-all">
                Create Account <ArrowRight size={16} />
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Already have an account? <button onClick={() => setMode("signin")} className="text-violet-400 hover:text-violet-300 font-medium">Sign In</button></p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <button onClick={skipAndTrade} className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                Skip — Trade on WhatsApp Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <LogIn size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Welcome Back</h3>
              <p className="text-sm text-gray-400">Sign in to your account</p>
            </div>
            <form onSubmit={handleSignin} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                <input name="email" type="email" required placeholder="john@email.com" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Password</label>
                <input name="password" type="password" required placeholder="Your password" onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/15 transition-all" />
              </div>
              <button type="submit" className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/20 transition-all">
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">Don't have an account? <button onClick={() => setMode("signup")} className="text-violet-400 hover:text-violet-300 font-medium">Sign Up</button></p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <button onClick={skipAndTrade} className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                Trade on WhatsApp Without Account
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
