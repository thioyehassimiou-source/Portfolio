import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../constants";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import GraduationCap from "lucide-react/dist/esm/icons/graduation-cap";
import Users from "lucide-react/dist/esm/icons/users";

const typeIcons = {
  code: Code2,
  education: GraduationCap,
  leadership: Users,
};

const typeColors = {
  code: {
    bg: "bg-indigo-500/15",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    line: "from-indigo-500",
  },
  education: {
    bg: "bg-blue-500/15",
    border: "border-blue-500/30",
    text: "text-blue-400",
    line: "from-blue-500",
  },
  leadership: {
    bg: "bg-violet-500/15",
    border: "border-violet-500/30",
    text: "text-violet-400",
    line: "from-violet-500",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

const Experience = () => {
  return (
    <section id="parcours" className="py-16 md:py-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-indigo-600/10 bottom-0 right-0" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center mb-4">
            Mon parcours
          </p>
          <h2 className="section-title mb-4">
            Expériences &{" "}
            <span className="text-gradient">Engagement</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ce que j'ai fait en dehors du code : leadership, formation et
            implication dans ma communauté universitaire.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto relative"
        >
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent" />

          {experiences.map((exp, idx) => {
            const colors = typeColors[exp.type] || typeColors.code;
            const Icon = typeIcons[exp.type] || Code2;

            return (
              <motion.div
                key={idx}
                variants={item}
                className="relative pl-16 pb-12 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[11px] top-1 w-[22px] h-[22px] rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center ${colors.text} group-hover:scale-125 transition-transform`}
                >
                  <Icon size={10} />
                </div>

                {/* Card */}
                <div className="card-glow rounded-2xl p-6 hover:border-indigo-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full w-fit border border-indigo-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base text-indigo-300/80 font-semibold mb-3">
                    {exp.place}
                  </p>
                  <p className="text-gray-300 text-[17px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
