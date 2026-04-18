import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../constants";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import Layers from "lucide-react/dist/esm/icons/layers";
import FileText from "lucide-react/dist/esm/icons/file-text";
import profileImg from "../assets/optimized/profile-final.webp";

/* ── Typing animation hook ── */
function useTyping(words, speed = 70, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setText(current.slice(0, charIdx - 1));
          if (charIdx === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

/* ── Animated counter ── */
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(start);
    }, 35);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const roles = [
  "Développeur Full-Stack",
  "Spécialiste Web & Mobile",
  "Orienté Produit & Impact",
];

const stats = [
  { value: 6, suffix: "+", label: "Projets d'impact livrés" },
  { value: 8, suffix: "+", label: "Technologies maîtrisées" },
  { value: 1, suffix: " an", label: "Expérience en freelance" },
];

const Hero = () => {
  const typedText = useTyping(roles);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-indigo-600/20 -top-40 -left-60" />
      <div className="orb w-[500px] h-[500px] bg-violet-600/15 bottom-0 right-0" />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-1/2 left-1/2" />

      {/* Grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      <div className="section-container w-full pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left: Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ouvert aux opportunités & collaborations
              </span>
            </motion.div>

            {/* Intro + Name */}
            <motion.p
              variants={item}
              className="text-indigo-400 font-mono text-base tracking-widest uppercase mb-3"
            >
              Bonjour, je suis
            </motion.p>
            <motion.h1
              variants={item}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight lg:leading-[1.05] mb-6"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
              <span className="text-2xl text-gray-200 font-medium font-mono">
                {typedText}
                <span className="cursor-blink ml-0.5 text-indigo-400">|</span>
              </span>
            </motion.div>

            {/* Bio — professional & impact driven */}
            <motion.p
              variants={item}
              className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
            >
              Je transforme des besoins métier complexes en produits numériques performants (SaaS, logistique, éducation). Ma stack de prédilection :{" "}
              <span className="text-white font-bold">
                React, Node.js et Flutter.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#projets" className="btn-primary border-2 border-indigo-500 shadow-lg shadow-indigo-500/25 px-6">
                Voir mes projets
                <ArrowRight size={18} />
              </a>
              <a href="/cv.html" target="_blank" className="btn-outline px-6 text-white border-white/20 hover:border-white/50 hover:bg-white/10 flex items-center gap-2">
                <FileText size={18} />
                Télécharger CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:flex sm:gap-8 border-t border-white/5 pt-10 gap-y-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 m-auto w-[calc(100%+40px)] h-[calc(100%+40px)] -left-5 -top-5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 70%, rgba(99,102,241,0.8) 100%)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 m-auto w-[calc(100%+80px)] h-[calc(100%+80px)] -left-10 -top-10 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 80%, rgba(139,92,246,0.4) 100%)",
                }}
              />

              {/* Photo */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden img-glow bg-gradient-to-t from-indigo-900/50 to-transparent border border-indigo-400/20">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-contain object-bottom scale-[1.15]"
                  />
                </div>
              </motion.div>

              {/* Floating badge — Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-6 top-1/3 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <MapPin size={16} className="text-indigo-400 shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 leading-none mb-1">
                    Localisation
                  </p>
                  <p className="text-base font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </motion.div>

              {/* Floating badge — Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-4 bottom-1/4 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <Layers size={16} className="text-violet-400 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 leading-none">Profil</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Solutions Architect
                  </p>
                </div>
              </motion.div>

              {/* Floating badge — Tech */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute left-1/2 -translate-x-1/2 -top-6 flex items-center gap-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 rounded-full px-4 py-2 shadow-2xl"
              >
                <Code2 size={14} className="text-indigo-400" />
                <span className="text-xs font-mono text-indigo-300">
                  React · Node.js · Flutter
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-gray-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-indigo-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
