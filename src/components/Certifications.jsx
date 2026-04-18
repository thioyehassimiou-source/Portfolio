import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert1 from "../assets/certificates/cert-1.jpeg";
import cert2 from "../assets/certificates/cert-2.jpeg";
import cert3 from "../assets/certificates/cert-3.jpeg";
import Award from "lucide-react/dist/esm/icons/award";
import X from "lucide-react/dist/esm/icons/x";

const certifications = [
  {
    id: 1,
    image: cert1,
    title: "Formation en Marketing Digital",
    organization: "Université de Labé / C.J.P",
    description: "Certificat attestant de la validation des compétences en marketing digital lors du Forum d'Orientation (FODR)."
  },
  {
    id: 2,
    image: cert2,
    title: "Baccalauréat Sc. Mathématiques",
    organization: "Ministère de l'Enseignement",
    description: "Diplôme de Bachelier obtenu avec la mention Assez Bien, confirmant des bases scientifiques et analytiques solides."
  },
  {
    id: 3,
    image: cert3,
    title: "Formation Intelligence Artificielle",
    organization: "Université de Labé & AFD",
    description: "Attestation de participation brillante à la formation spécialisée sur l'intelligence artificielle et ses enjeux."
  },
];

const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section id="certifications" className="py-16 md:py-32 relative overflow-hidden">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="flex items-center justify-center gap-2 text-indigo-400 font-mono text-sm tracking-wide uppercase mb-3">
              <Award size={16} /> Validation des Acquis
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Diplômes & <span className="text-gradient">Attestations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-mono text-indigo-400/70 mt-1">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {cert.description}
                  </p>
                  <button
                    onClick={() => setSelectedImg(cert.image)}
                    className="mt-auto w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                  >
                    Voir le certificat
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex justify-center items-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg}
              alt="Diplôme agrandi"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
