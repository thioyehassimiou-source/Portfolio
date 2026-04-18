import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { personalInfo } from "../constants";
import Mail from "lucide-react/dist/esm/icons/mail";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle";
import Send from "lucide-react/dist/esm/icons/send";
import CheckCircle2 from "lucide-react/dist/esm/icons/check-circle-2";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Clock from "lucide-react/dist/esm/icons/clock";
import FileText from "lucide-react/dist/esm/icons/file-text";
import Phone from "lucide-react/dist/esm/icons/phone";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";

const Contact = () => {
  const [state, handleSubmit] = useForm("myklwolw");

  const infoItems = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "indigo",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      value: "Envoyer un message",
      href: `https://wa.me/${personalInfo.whatsapp.replace(/\+/g, "")}`,
      color: "emerald",
    },
    {
      icon: <Phone size={20} />,
      label: "Téléphone",
      value: "+224 624 19 30 69",
      href: "tel:+224624193069",
      color: "indigo",
    },
    {
      icon: <MapPin size={20} />,
      label: "Localisation",
      value: personalInfo.location,
      href: "#",
      color: "violet",
    },
    {
      icon: <Clock size={20} />,
      label: "Disponibilité",
      value: "Lun – Sam, 08h – 22h",
      href: "#",
      color: "amber",
    },
  ];

  const colorClasses = {
    indigo: "bg-indigo-500/15 border-indigo-500/25 text-indigo-400",
    emerald: "bg-emerald-500/15 border-emerald-500/25 text-emerald-400",
    violet: "bg-violet-500/15 border-violet-500/25 text-violet-400",
    amber: "bg-amber-500/15 border-amber-500/25 text-amber-400",
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 top-0 left-0" />
      <div className="orb w-[400px] h-[400px] bg-cyan-500/8 bottom-0 right-0" />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center mb-4">Contact</p>
          <h2 className="section-title mb-4">
            Démarrons une <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Vous avez un projet, une idée ou une opportunité ? Je suis disponible et
            je réponds rapidement. N'hésitez pas.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">

          {/* ── Left column: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="md:col-span-2 space-y-4"
          >
            {infoItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-4 rounded-2xl card-glow group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${colorClasses[item.color]}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5">{item.label}</p>
                  <p className="text-base font-bold text-gray-200 group-hover:text-white transition-colors break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 rounded-xl card-glow text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <GithubIcon size={18} /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl card-glow text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl card-glow text-gray-400 hover:text-[#1877F2] transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
            </div>

            {/* Resume CTA */}
            <div className="pt-6">
              <a
                href="/cv.html"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all font-semibold text-white/90 group"
              >
                <FileText size={18} />
                Voir mon CV complet
              </a>
            </div>
          </motion.div>

          {/* ── Right column: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="md:col-span-3"
          >
            <div className="card-glow rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message envoyé !</h3>
                    <p className="text-lg text-gray-300 mb-8">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {state.errors && state.errors.length > 0 && !state.errors.some(e => e.field) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-4 mb-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                      >
                        Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser l'email direct.
                      </motion.div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm text-gray-400 mb-1.5 font-medium">Nom complet *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Votre nom"
                        />
                        <ValidationError prefix="Nom" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5 font-medium">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="form-input"
                          placeholder="votre@email.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs text-gray-400 mb-1.5">Objet</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className="form-input"
                        placeholder="Collaboration, projet, opportunité..."
                      />
                      <ValidationError prefix="Objet" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs text-gray-400 mb-1.5">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="form-input"
                        placeholder="Décrivez votre projet ou votre idée..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={18} /> Envoyer le message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
