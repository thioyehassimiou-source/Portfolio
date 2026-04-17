import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../constants";
import { Code2, Server, Database, Wrench } from "lucide-react";

const iconMap = {
  Frontend: Code2,
  Backend: Server,
  "Base de données": Database,
  Outils: Wrench,
};

const colorMap = {
  Frontend: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    fill: "from-blue-500 via-cyan-400 to-sky-300",
    glow: "rgba(59,130,246,0.3)",
    orbColor: "bg-blue-600/10",
  },
  Backend: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    fill: "from-emerald-500 via-teal-400 to-green-300",
    glow: "rgba(16,185,129,0.3)",
    orbColor: "bg-emerald-600/10",
  },
  "Base de données": {
    text: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    fill: "from-orange-500 via-amber-400 to-yellow-300",
    glow: "rgba(249,115,22,0.3)",
    orbColor: "bg-orange-600/10",
  },
  Outils: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    fill: "from-violet-500 via-purple-400 to-fuchsia-400",
    glow: "rgba(139,92,246,0.3)",
    orbColor: "bg-violet-600/10",
  },
};

function getLevelLabel(level) {
  if (level >= 80) return "Avancé";
  if (level >= 60) return "Intermédiaire";
  if (level >= 40) return "En apprentissage";
  return "Débutant";
}

/* Animated progress bar with entry trigger */
function SkillBar({ level, colors }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="progress-bar">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
        className={`progress-fill bg-gradient-to-r ${colors.fill}`}
        style={{ backgroundSize: "200% 100%" }}
      />
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
};

const techTags = [
  "React", "Next.js", "Node.js", "Flutter", "Django",
  "Supabase", "PostgreSQL", "MySQL", "Git", "Tailwind CSS", "Vue.js",
];

const Skills = () => {
  return (
    <section id="competences" className="py-32 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/8 to-transparent pointer-events-none" />
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 bottom-0 left-0" />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/8 top-20 right-1/4" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center mb-4">
            Compétences en construction
          </p>
          <h2 className="section-title mb-5">
            Mon{" "}
            <span className="text-gradient">stack technique</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Les technologies que j'apprends et utilise dans mes projets.
            Certaines sont solides, d'autres en progression — je suis
            transparent sur mon niveau réel.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((category) => {
            const colors = colorMap[category.category] || colorMap["Frontend"];
            const Icon = iconMap[category.category] || Code2;

            return (
              <motion.div
                key={category.category}
                variants={card}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.23,1,0.32,1] } }}
                className="card-glow rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${colors.orbColor} blur-3xl pointer-events-none`}
                />

                {/* Category icon + label */}
                <div className="flex items-center gap-3 mb-7 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} shrink-0 transition-shadow group-hover:shadow-lg`}
                    style={{ boxShadow: `0 0 0 0 ${colors.glow}` }}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white text-base">{category.category}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{category.items.length} technologies</p>
                  </div>
                </div>

                {/* Skills list */}
                <ul className="space-y-5 relative z-10">
                  {category.items.map((skill, idx) => (
                    <li key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[17px] text-gray-200 font-semibold">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-mono ${colors.text} font-medium`}>
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>
                      <SkillBar level={skill.level} colors={colors} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <div className="gradient-line mb-10" />
          <div className="flex flex-wrap gap-3 justify-center">
            {techTags.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="skill-tag text-sm sm:text-base py-2 px-5"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
