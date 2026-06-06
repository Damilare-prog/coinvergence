"use client";

import { useEffect } from "react";
import { PAGE_DATA } from "./constants";

export default function Home() {
  useEffect(() => {
    // Load external scripts
    const scripts = [
      "https://cdn.tailwindcss.com",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.head.appendChild(script);
    });

    // Load fonts
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Configure Tailwind
    const tailwindConfig = document.createElement("script");
    tailwindConfig.textContent = `
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
    `;
    document.head.appendChild(tailwindConfig);

    // Execute inline scripts after a delay
    setTimeout(() => {
      const script = document.createElement("script");
      script.innerHTML = PAGE_DATA.scripts;
      document.body.appendChild(script);
    }, 1000);

    return () => {};
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_DATA.css }} />
      <div dangerouslySetInnerHTML={{ __html: PAGE_DATA.html }} suppressHydrationWarning />
    </>
  );
}
