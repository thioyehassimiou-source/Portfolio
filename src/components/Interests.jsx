import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { languages, hobbies } from "../constants";
import Heart from "lucide-react/dist/esm/icons/heart";
import MonitorPlay from "lucide-react/dist/esm/icons/monitor-play";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import Brain from "lucide-react/dist/esm/icons/brain";
import Rss from "lucide-react/dist/esm/icons/rss";
import Smile from "lucide-react/dist/esm/icons/smile";
import Globe from "lucide-react/dist/esm/icons/globe";

const iconMap = {
  MonitorPlay,
  BookOpen,
  Brain,
  Rss,
  Heart,
  Smile
};

/* Animated progress bar with glowing dot */
function LangBar({ percentage, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="progress-bar">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay }}
        className="progress-fill bg-gradient-to-r from-indigo-500 via-violet-400 to-cyan-400"
        style={{ backgroundSize: "200% 100%" }}
      />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] },
  },
};

const hobbyVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const Interests = () => {
  return (
    <section id="interets" className="py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-[450px] h-[450px] bg-blue-600/10 top-10 -left-20" />
      <div className="orb w-[350px] h-[350px] bg-violet-600/10 bottom-10 -right-20" />

      {/* Separator line top */}
      <div className="gradient-line mb-0 absolute top-0 left-1/2 -translate-x-1/2 w-2/3" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center mb-4">Soft skills & Vie</p>
          <h2 className="section-title mb-5">
            Langues &{" "}
            <span className="text-gradient">Centres d'intérêt</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            Au-delà du code — ce qui me définit, ce qui m'inspire et ce que
            je parle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
          {/* === Languages === */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Column title */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <Globe size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Langues parlées</h3>
                <p className="text-xs text-gray-500 mt-0.5 font-mono">
                  {languages.length} langues maîtrisées
                </p>
              </div>
            </motion.div>

            <div className="space-y-9">
              {languages.map((lang, idx) => (
                <motion.div key={idx} variants={itemVariants} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                        {lang.name}
                      </h4>
                      <p className="text-base text-gray-400 mt-1 font-mono uppercase tracking-wider text-[13px]">
                        {lang.level}
                      </p>
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="text-sm font-bold font-mono text-indigo-400 tabular-nums"
                    >
                      {lang.percentage}%
                    </motion.span>
                  </div>
                  <LangBar percentage={lang.percentage} delay={idx * 0.15 + 0.2} />
                </motion.div>
              ))}
            </div>

            {/* Language flag badges */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                { flag: "🇫🇷", lang: "Français" },
                { flag: "🇬🇧", lang: "English" },
                { flag: "🌍", lang: "Pular" },
                { flag: "🌍", lang: "Malinké" }
              ].map(({ flag, lang }) => (
                <span
                  key={lang}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-base text-gray-300 font-medium hover:border-indigo-500/40 hover:text-white transition-all cursor-default"
                >
                  <span className="text-lg">{flag}</span>
                  {lang}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* === Hobbies === */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Column title */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Heart size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Loisirs & Passions</h3>
                <p className="text-xs text-gray-500 mt-0.5 font-mono">
                  Ce qui me ressource
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, idx) => {
                const Icon = iconMap[hobby.icon] || iconMap.Smile;
                const accent = ["indigo", "violet", "cyan", "emerald"][idx % 4];
                const accentStyles = {
                  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-400", glow: "rgba(99,102,241,0.3)" },
                  violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400", glow: "rgba(139,92,246,0.3)" },
                  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", glow: "rgba(6,182,212,0.3)" },
                  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", glow: "rgba(16,185,129,0.3)" },
                };
                const style = accentStyles[accent];

                return (
                  <motion.div
                    key={idx}
                    variants={hobbyVariants}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                    }}
                    className="card-glow rounded-2xl p-5 flex flex-col gap-4 group relative overflow-hidden cursor-default"
                  >
                    {/* Corner accent */}
                    <div
                      className={`absolute -top-4 -right-4 w-16 h-16 ${style.bg} blur-2xl pointer-events-none group-hover:opacity-150 transition-opacity`}
                    />

                    <div
                      className={`w-11 h-11 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center ${style.text} group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    >
                      <Icon size={22} />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-indigo-200 transition-colors">
                        {hobby.name}
                      </h4>
                      <p className="text-base text-gray-300 leading-relaxed">
                        {hobby.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Separator line bottom */}
      <div className="gradient-line mt-0 absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3" />
    </section>
  );
};

export default Interests;
