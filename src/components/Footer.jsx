import React from "react";
import { personalInfo } from "../constants";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";
import Mail from "lucide-react/dist/esm/icons/mail";
import ArrowUp from "lucide-react/dist/esm/icons/arrow-up";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050510] relative">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white mb-1">
              {personalInfo.name.split(" ")[0]}
              <span className="text-indigo-400">.dev</span>
            </p>
            <p className="text-sm text-gray-500">Développeur Full Stack — Labé, Guinée</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {["accueil", "a-propos", "competences", "projets", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-gray-500 hover:text-white transition-colors capitalize"
              >
                {id.replace("-", " ")}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-500 hover:text-indigo-400 hover:border-indigo-500/40 transition-all">
              <Mail size={16} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-500 hover:text-white hover:border-indigo-500/40 transition-all">
              <GithubIcon size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-500 hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all">
              <LinkedinIcon size={16} />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-500 hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all">
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} <span className="text-gray-400 font-medium">{personalInfo.name}</span>. Tous droits réservés.
          </p>
          <a href="#accueil"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-400 transition-colors group">
            Retour en haut
            <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all">
              <ArrowUp size={12} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
