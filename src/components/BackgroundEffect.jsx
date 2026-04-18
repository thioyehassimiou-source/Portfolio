import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-[#050510]">
      {/* Background radial gradient following mouse */}
      <motion.div
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50, mass: 0.5 }}
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20 bg-gradient-to-br from-indigo-500/30 to-violet-600/20"
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Static orbs (fallback for mobile/screens without mouse movement) */}
      <div className="orb w-[500px] h-[500px] bg-indigo-900/10 top-[-10%] right-[-5%] blur-[100px]" />
      <div className="orb w-[600px] h-[600px] bg-violet-900/10 bottom-[10%] left-[-10%] blur-[120px]" />
      <div className="orb w-[300px] h-[300px] bg-cyan-900/5 top-[40%] left-[30%] blur-[80px]" />
      
      {/* Moving background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default BackgroundEffect;
