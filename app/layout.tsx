import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coinvergence — Digital Asset Marketplace",
  description: "The safest P2P marketplace for crypto, gift cards, domains, and brand-ready digital assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  sans: ['Inter','sans-serif'],
                  display: ['Space Grotesk','sans-serif'],
                },
                colors: {
                  brand: {50:'#f0f9ff',100:'#e0f2fe',200:'#bae6fd',300:'#7dd3fc',400:'#38bdf8',500:'#0ea5e9',600:'#0284c7',700:'#0369a1',800:'#075985',900:'#0c4a6e',950:'#082f49'},
                  accent: {50:'#fdf4ff',100:'#fae8ff',200:'#f5d0fe',300:'#f0abfc',400:'#e879f9',500:'#d946ef',600:'#c026d3',700:'#a21caf',800:'#86198f',900:'#701a75'},
                  dark: {50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617'},
                }
              }
            }
          }
        ` }} />
        <style dangerouslySetInnerHTML={{ __html: `
/* Critical styles until Tailwind loads */
.bg-dark-950 { background-color: #020617 !important; }
.text-dark-50 { color: #f8fafc !important; }
.text-white { color: #ffffff !important; }
.text-dark-400 { color: #94a3b8 !important; }
.max-w-7xl { max-width: 80rem; margin-left: auto; margin-right: auto; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.rounded-xl { border-radius: 0.75rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.gap-8 { gap: 2rem; }
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-2xl { font-size: 1.5rem; }
.text-3xl { font-size: 1.875rem; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.hidden { display: none; }
.fixed { position: fixed; }
.absolute { position: absolute; }
.relative { position: relative; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.z-50 { z-index: 50; }
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.overflow-hidden { overflow: hidden; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
.md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.gap-6 { gap: 1.5rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mt-12 { margin-top: 3rem; }
.mt-16 { margin-top: 4rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }
.text-left { text-align: left; }
.block { display: block; }
.inline-block { display: inline-block; }
.w-12 { width: 3rem; }
.h-12 { height: 3rem; }
.rounded-2xl { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }
.border { border-width: 1px; }
.border-dark-700 { border-color: #334155; }
.bg-dark-800 { background-color: #1e293b; }
.bg-dark-900 { background-color: #0f172a; }
.hover\:bg-dark-800:hover { background-color: #1e293b; }
.transition-all { transition-property: all; }
.duration-300 { transition-duration: 300ms; }
.duration-500 { transition-duration: 500ms; }
.ease-out { transition-timing-function: ease-out; }
.opacity-0 { opacity: 0; }
.opacity-100 { opacity: 1; }
.transform { transform: translateX(0); }
.translate-y-8 { transform: translateY(2rem); }
.scale-95 { transform: scale(0.95); }
.scale-100 { transform: scale(1); }

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:#020617;color:#f8fafc;overflow-x:hidden}
::-webkit-scrollbar{width:8px}
::-webkit-scrollbar-track{background:#0f172a}
::-webkit-scrollbar-thumb{background:#334155;border-radius:4px}
::-webkit-scrollbar-thumb:hover{background:#475569}
.hero-bg{position:relative;overflow:hidden}
.hero-bg::before{content:'';position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle at 20% 50%,rgba(14,165,233,0.15) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(217,70,239,0.1) 0%,transparent 50%),radial-gradient(circle at 40% 80%,rgba(14,165,233,0.08) 0%,transparent 50%);animation:bgFloat 20s ease-in-out infinite}
@keyframes bgFloat{0%,100%{transform:translate(0,0) rotate(0deg)}33%{transform:translate(30px,-30px) rotate(1deg)}66%{transform:translate(-20px,20px) rotate(-1deg)}}
.grid-pattern{background-image:linear-gradient(rgba(148,163,184,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.03) 1px,transparent 1px);background-size:60px 60px}
.glass{background:rgba(15,23,42,0.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(148,163,184,0.1)}
.glass-strong{background:rgba(15,23,42,0.8);backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px);border:1px solid rgba(148,163,184,0.15)}
.glow-brand{box-shadow:0 0 40px rgba(14,165,233,0.3),0 0 80px rgba(14,165,233,0.1)}
.glow-accent{box-shadow:0 0 40px rgba(217,70,239,0.3),0 0 80px rgba(217,70,239,0.1)}
.gradient-text{background:linear-gradient(135deg,#0ea5e9 0%,#d946ef 50%,#0ea5e9 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 5s ease infinite}
@keyframes gradientShift{0%,100%{background-position:0% center}50%{background-position:100% center}}
.float{animation:float 6s ease-in-out infinite}
.float-delay{animation:float 6s ease-in-out infinite;animation-delay:2s}
.float-delay-2{animation:float 6s ease-in-out infinite;animation-delay:4s}
@keyframes float{0%,100%{transform:translateY(0px)}50%{transform:translateY(-20px)}}
.card-hover{transition:all 0.4s cubic-bezier(0.4,0,0.2,1)}
.card-hover:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(0,0,0,0.4),0 0 60px rgba(14,165,233,0.15);border-color:rgba(14,165,233,0.3)}
.btn-primary{background:linear-gradient(135deg,#0ea5e9 0%,#0284c7 100%);position:relative;overflow:hidden;transition:all 0.3s ease}
.btn-primary::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent);transition:left 0.5s ease}
.btn-primary:hover::before{left:100%}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(14,165,233,0.4)}
.btn-secondary{border:1px solid rgba(148,163,184,0.3);transition:all 0.3s ease}
.btn-secondary:hover{border-color:rgba(14,165,233,0.5);background:rgba(14,165,233,0.1);transform:translateY(-2px)}
.marquee-container{overflow:hidden;mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent);-webkit-mask-image:linear-gradient(to right,transparent,black 10%,black 90%,transparent)}
.marquee-track{display:flex;animation:marquee 30s linear infinite}
.marquee-track:hover{animation-play-state:paused}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.ticker-item{transition:all 0.3s ease}
.ticker-item:hover{background:rgba(14,165,233,0.1);transform:scale(1.02)}
.tab-active{background:linear-gradient(135deg,rgba(14,165,233,0.2),rgba(217,70,239,0.1));border-color:rgba(14,165,233,0.5);color:#0ea5e9}
.pulse-dot{position:relative}
.pulse-dot::after{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;border-radius:50%;background:inherit;animation:pulse 2s ease-out infinite;opacity:0.5}
@keyframes pulse{0%{transform:translate(-50%,-50%) scale(1);opacity:0.5}100%{transform:translate(-50%,-50%) scale(2.5);opacity:0}}
.nav-link{position:relative}
.nav-link::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:linear-gradient(90deg,#0ea5e9,#d946ef);transition:width 0.3s ease}
.nav-link:hover::after{width:100%}
.reveal{opacity:0;transform:translateY(30px)}
.reveal.active{opacity:1;transform:translateY(0);transition:all 0.8s cubic-bezier(0.4,0,0.2,1)}
.stagger-children>*{opacity:0;transform:translateY(20px)}
.stagger-children.active>*:nth-child(1){transition-delay:0.1s}
.stagger-children.active>*:nth-child(2){transition-delay:0.2s}
.stagger-children.active>*:nth-child(3){transition-delay:0.3s}
.stagger-children.active>*:nth-child(4){transition-delay:0.4s}
.stagger-children.active>*:nth-child(5){transition-delay:0.5s}
.stagger-children.active>*:nth-child(6){transition-delay:0.6s}
.stagger-children.active>*{opacity:1;transform:translateY(0);transition:all 0.6s cubic-bezier(0.4,0,0.2,1)}
.trading-card{background:linear-gradient(145deg,rgba(15,23,42,0.9),rgba(30,41,59,0.8));border:1px solid rgba(148,163,184,0.1)}
.price-tag{background:linear-gradient(135deg,rgba(14,165,233,0.2),rgba(217,70,239,0.1));border:1px solid rgba(14,165,233,0.3)}
.status-verified{background:rgba(34,197,94,0.15);color:#22c55e;border:1px solid rgba(34,197,94,0.3)}
.status-escrow{background:rgba(14,165,233,0.15);color:#0ea5e9;border:1px solid rgba(14,165,233,0.3)}
.feature-icon{background:linear-gradient(135deg,rgba(14,165,233,0.2),rgba(217,70,239,0.1));border:1px solid rgba(14,165,233,0.2)}
.testimonial-card{background:linear-gradient(145deg,rgba(15,23,42,0.8),rgba(30,41,59,0.6))}
.domain-card{background:linear-gradient(135deg,rgba(15,23,42,0.9),rgba(30,41,59,0.7));position:relative;overflow:hidden}
.domain-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#0ea5e9,#d946ef);transform:scaleX(0);transition:transform 0.3s ease}
.domain-card:hover::before{transform:scaleX(1)}
.service-card{background:linear-gradient(145deg,rgba(15,23,42,0.8),rgba(30,41,59,0.5));border:1px solid rgba(148,163,184,0.1);transition:all 0.4s ease}
.service-card:hover{border-color:rgba(14,165,233,0.3);transform:translateY(-4px);box-shadow:0 20px 40px rgba(0,0,0,0.3)}
.trust-badge{background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.2)}
.live-indicator{animation:livePulse 2s ease-in-out infinite}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:0.5}}
.mobile-menu{transform:translateX(100%);transition:transform 0.3s ease}
.mobile-menu.active{transform:translateX(0)}
.modal-overlay{opacity:0;visibility:hidden;transition:all 0.3s ease}
.modal-overlay.active{opacity:1;visibility:visible}
.modal-content{transform:scale(0.9) translateY(20px);transition:all 0.3s ease}
.modal-overlay.active .modal-content{transform:scale(1) translateY(0)}
.toast{transform:translateX(120%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1)}
.toast.show{transform:translateX(0)}
#particleCanvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}
.whatsapp-btn{background:linear-gradient(135deg,#25D366,#128C7E);transition:all 0.3s ease}
.whatsapp-btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(37,211,102,0.4)}
.bybit-badge{background:linear-gradient(135deg,#F7A600,#FF9900);color:#000;font-weight:700}
@media(max-width:640px){.hero-title{font-size:2.5rem!important;line-height:1.1!important}}` }} />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#020617', color: '#f8fafc', fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
