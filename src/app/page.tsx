"use client";
import dynamic from "next/dynamic";

const ImageSlider = dynamic(() => import("../components/ImageSlider"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0, background: 'url(/quadco-logo.png) center/cover no-repeat', opacity: 0.12 }} />
      <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 1 }}>
        <ImageSlider />
      </div>
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", color: "#fff", background: "rgba(0,0,0,0.4)" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>Welcome to QUADCO Consults</h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "600px", textAlign: "center" }}>
          Shaping Tomorrow’s Enterprises
        </p>
      </div>
    </main>
  );
}