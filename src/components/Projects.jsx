import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, personalInfo } from "../constants";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import ChevronUp from "lucide-react/dist/esm/icons/chevron-up";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Code2 from "lucide-react/dist/esm/icons/code-2";
import { GithubIcon } from "./SocialIcons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const sorted = [...projects].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <section id="projets" className="py-16 md:py-32 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-indigo-600/10 top-0 right-0" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/8 bottom-0 left-1/4" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="section-label mb-4">Mes réalisations</p>
            <h2 className="section-title">
              Projets <span className="text-gradient">concrets</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Chaque projet est né d'un problème réel que j'ai voulu résoudre. Ils
            représentent ma progression et ma capacité à livrer des solutions
            fonctionnelles.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {sorted.map((project, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="project-card group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-[#050510] border-b border-white/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col group-hover:scale-105 transition-transform duration-500" style={{ transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)" }}>
                    {/* Fake Window Header */}
                    <div className="h-6 w-full bg-white/5 border-b border-white/5 flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/50" />
                      <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
                    </div>
                    {/* Fake Content / Mockup */}
                    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0a0a1a] to-indigo-950/20">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 text-indigo-400">
                        <Code2 size={24} />
                      </div>
                      <span className="text-indigo-400/90 font-mono text-xs tracking-widest uppercase">
                        Mockup UI
                      </span>
                    </div>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 featured-badge">
                    ★ Projet phare
                  </div>
                )}
                {/* En cours badge */}
                {project.demo === "#" && !project.featured && (
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur border border-amber-400/50">
                    🛠️ En conception
                  </div>
                )}
                {/* Tech tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick links on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-indigo-500/90 backdrop-blur flex items-center justify-center text-white hover:bg-indigo-400 transition-colors shadow-lg"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                
                {/* Impact Highlight */}
                {project.impact && (
                  <div className="mb-4 flex items-start gap-2 text-indigo-300 text-sm font-medium bg-indigo-500/5 border border-indigo-500/10 rounded-lg p-3">
                    <span className="shrink-0 text-base">🚀</span>
                    <span>{project.impact}</span>
                  </div>
                )}

                <p className="text-gray-200 text-[15px] leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Expandable details */}
                <div className="mb-4 flex-1">
                  <button
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                    className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium group/btn"
                  >
                    <span className="group-hover/btn:underline underline-offset-2">
                      {expanded === idx ? "Masquer" : "Détails du projet"}
                    </span>
                    <motion.span
                      animate={{ rotate: expanded === idx ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3 text-sm leading-relaxed">
                          {[
                            { emoji: "🎯", label: "Problème", color: "text-indigo-400", content: project.problem },
                            { emoji: "💡", label: "Solution", color: "text-emerald-400", content: project.solution },
                            { emoji: "👤", label: "Mon rôle", color: "text-violet-400", content: project.role },
                          ].map(({ emoji, label, color, content }) => (
                            <div key={label} className="p-4 rounded-xl bg-white/[0.025] border border-white/[0.05]">
                              <p className={`${color} font-bold mb-1.5 text-base`}>{emoji} {label}</p>
                              <p className="text-gray-300">{content}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-white/[0.06] pt-4 mt-auto">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors duration-200 group/link"
                    >
                      <GithubIcon size={14} />
                      <span className="group-hover/link:underline underline-offset-2">Code</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-gray-700 cursor-not-allowed">
                      <GithubIcon size={14} /> Privé
                    </span>
                  )}
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-indigo-400 transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={14} />
                      <span className="group-hover/link:underline underline-offset-2">Démo live</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-gray-700 cursor-not-allowed">
                      <ExternalLink size={14} /> En cours
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="gradient-line w-1/3" />
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex mt-2"
          >
            <GithubIcon size={16} />
            Voir tous mes projets sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
