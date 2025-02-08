import React from "react";
import heroImage from "../assets/hero-image.jpg"; // ✅ Import Image

const Hero = () => {
  return (
    <section style={{ position: "relative", textAlign: "center" }}>
      {/* Hero Image */}
      <img 
        src={heroImage} 
        alt="Hero" 
        style={{ width: "100%", height: "400px", objectFit: "cover" }} 
      />

      {/* Company Name Overlay - Top Left */}
      <h1
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with transparency
          color: "white", // White text
          padding: "15px 25px", // More padding for better spacing
          borderRadius: "8px",
          fontSize: "2.5rem", // Larger font size
          fontWeight: "bold",
          boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        Cosmos Wires
      </h1>
    </section>
  );
};

export default Hero;
