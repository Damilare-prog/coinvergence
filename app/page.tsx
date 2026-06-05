"use client";

export default function Home() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#020617", 
      color: "#f8fafc",
      fontFamily: "Inter, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Coinvergence
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#94a3b8", maxWidth: "600px" }}>
        Digital Asset P2P Marketplace — Coming Soon
      </p>
      <a 
        href="https://wa.me/2349133588720" 
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "600"
        }}
      >
        Buy on WhatsApp
      </a>
    </div>
  );
}
