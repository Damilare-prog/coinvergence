"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // The static HTML is in public/index.html
    // This component is just a fallback
    // For static export, Next.js will use public/index.html automatically
    return () => {};
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#020617", color: "#f8fafc" }}>
      <p>Loading...</p>
    </div>
  );
}
