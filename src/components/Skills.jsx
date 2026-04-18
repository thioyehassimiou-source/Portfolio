import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import Server from "lucide-react/dist/esm/icons/server";
import Database from "lucide-react/dist/esm/icons/database";
import Wrench from "lucide-react/dist/esm/icons/wrench";

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

const statusColors = {
  "Avancé": "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  "Intermédiaire": "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  "En apprentissage": "text-amber-300 bg-amber-500/10 border-amber-500/20",
  "Débutant": "text-gray-400 bg-white/5 border-white/10",
};

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
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

const techTags = [
  "React", "Next.js", "Node.js", "Flutter", "Django",
  "Supabase", "PostgreSQL", "MySQL", "Git", "Tailwind CSS", "Vue.js",
];

const Skills = () => {
  return (
    <section id="competences" className="py-16 md:py-32 relative overflow-hidden">
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
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center mb-4">
            Expertise & Technologies
          </p>
          <h2 className="section-title mb-5">
            Mon <span className="text-gradient">écosystème technique</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Une sélection de technologies que j'utilise pour concevoir des solutions scalables et performantes. Je privilégie la maîtrise réelle à l'accumulation d'outils.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category) => {
            const colors = colorMap[category.category] || colorMap["Frontend"];
            const Icon = iconMap[category.category] || Code2;

            return (
              <motion.div
                key={category.category}
                variants={card}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.23,1,0.32,1] } }}
                className="card-glow rounded-2xl p-6 group relative overflow-hidden flex flex-col"
              >
                {/* Subtle corner glow */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${colors.orbColor} blur-3xl pointer-events-none`}
                />

                {/* Category icon + label */}
                <div className="flex items-center gap-3 mb-8 relative z-10 border-b border-white/5 pb-5">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} shrink-0`}
                  >
                    <Icon size={20} />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-white text-base">{category.category}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{category.items.length} technologies</p>
                  </div>
                </div>

                {/* Skills list */}
                <ul className="grid gap-3 relative z-10">
                  {category.items.map((skill) => (
                    <li 
                      key={skill.name}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors group/item"
                    >
                      <span className="text-gray-200 font-medium group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${statusColors[skill.status] || statusColors["Débutant"]}`}>
                        {skill.status}
                      </span>
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
          transition={{ duration: 0.4, delay: 0.2 }}
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
