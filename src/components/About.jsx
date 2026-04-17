import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import profileImg from "../assets/optimized/profile-univ-nobg.webp";
import { GraduationCap, Briefcase, Target, Heart, BookOpen, Languages } from "lucide-react";

const traits = [
  {
    icon: <GraduationCap size={18} />,
    label: "Formation",
    value: "Licence 2 Informatique — Université de Labé",
  },
  {
    icon: <Briefcase size={18} />,
    label: "Orientation",
    value: "Développement Web & Mobile Full Stack",
  },
  {
    icon: <Target size={18} />,
    label: "Objectif",
    value: "Devenir développeur full stack performant et créer des outils utiles en Guinée",
  },
  {
    icon: <Heart size={18} />,
    label: "Motivation",
    value: "Apprendre en construisant des projets concrets qui résolvent de vrais problèmes",
  },
  {
    icon: <BookOpen size={18} />,
    label: "Loisirs",
    value: "Séries, Lecture, Développement personnel",
  },
  {
    icon: <Languages size={18} />,
    label: "Langues",
    value: "Français (Courant), Anglais (Intermédiaire)",
  },
];

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const About = () => {
  return (
    <section id="a-propos" className="py-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-indigo-600/10 top-0 -right-40" />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-violet-600/20 rounded-3xl blur-3xl transform scale-90" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 aspect-[3/4] max-w-sm mx-auto bg-gradient-to-t from-indigo-900/50 to-[#050510]/50">
                <img
                  src={profileImg}
                  alt={`${personalInfo.name} — Étudiant développeur`}
                  className="w-full h-full object-contain object-bottom scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050510]/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">
                    {personalInfo.name}
                  </p>
                  <p className="text-indigo-300 text-base font-mono">
                    Étudiant développeur · L2 Informatique
                  </p>
                </div>
              </div>

              {/* Badge — Projets */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 sm:-right-4 top-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-2xl z-20"
              >
                <p className="text-2xl sm:text-3xl font-bold text-indigo-400">6+</p>
                <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                  Projets réalisés
                </p>
              </motion.div>

              {/* Badge — Code */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -left-2 sm:-left-4 bottom-20 bg-indigo-500/15 backdrop-blur-md border border-indigo-500/25 rounded-xl px-3 sm:px-4 py-2 z-20"
              >
                <p className="text-[10px] sm:text-xs font-mono text-indigo-300">
                  {"<Apprendre en créant />"}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={itemVariants}
              className="section-label mb-4"
            >
              À propos de moi
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="section-title mb-6"
            >
              Un étudiant qui{" "}
              <span className="text-gradient">construit pour apprendre</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-300 text-xl leading-relaxed mb-10"
            >
              <p>
                Je suis{" "}
                <span className="text-white font-bold">
                  {personalInfo.name}
                </span>
                , étudiant en{" "}
                <span className="text-white font-bold">
                  Licence 2 Informatique
                </span>{" "}
                à l'
                <span className="text-white font-bold">
                  {personalInfo.university}
                </span>
                . Je ne suis pas un développeur senior — je suis un étudiant
                passionné qui apprend chaque jour en construisant des projets
                concrets.
              </p>
              <p>
                Ma démarche est simple : identifier un problème réel autour de
                moi, puis concevoir une solution numérique pour le résoudre.
                C'est comme ça que j'ai développé <span className="text-white font-bold">6 projets</span> en parallèle de
                mes études — de la gestion académique au e-commerce, en passant
                par l'immobilier et la mise en relation de services.
              </p>
              <p>
                Mon objectif : devenir un{" "}
                <span className="text-white font-bold">
                  développeur Full Stack compétent
                </span>
                , capable de concevoir des solutions complètes qui ont un
                impact réel en Guinée et au-delà.
              </p>
            </motion.div>

            {/* Trait cards */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-3 mb-10"
            >
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500/25 transition-colors">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-0.5">{t.label}</p>
                    <p className="text-base text-gray-200 font-semibold leading-snug">
                      {t.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex gap-4">
              <a href="#projets" className="btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-outline">
                Me contacter
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
