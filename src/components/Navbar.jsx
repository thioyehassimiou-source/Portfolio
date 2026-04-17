import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { navLinks, personalInfo } from "../constants";
import { cn } from "../utils/cn";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "./SocialIcons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        )}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={() => { setActive(""); window.scrollTo(0, 0); }}
            className="flex items-center gap-2.5 group"
          >
            <motion.span
              whileHover={{ scale: 1.12, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20"
            >
              H
            </motion.span>
            <span className="font-bold text-white text-lg tracking-tight">
              {personalInfo.name.split(" ")[0]}
              <span className="text-indigo-400">.dev</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200",
                    active === link.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.title}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/8 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Social icons — desktop */}
            <div className="hidden md:flex items-center gap-2">
              {[
                { href: personalInfo.github, icon: <GithubIcon size={15} />, hoverColor: "hover:text-white" },
                { href: personalInfo.linkedin, icon: <LinkedinIcon size={15} />, hoverColor: "hover:text-[#0077b5]" },
                { href: personalInfo.facebook, icon: <FacebookIcon size={15} />, hoverColor: "hover:text-[#1877F2]" },
              ].map(({ href, icon, hoverColor }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-gray-400 transition-all duration-200",
                    hoverColor,
                    "hover:border-white/20 hover:bg-white/10"
                  )}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Contact CTA */}
            <a href="#contact" className="hidden md:flex btn-primary py-2 px-5 text-sm">
              Contactez-moi
            </a>

            {/* Mobile hamburger */}
            <motion.button
              onClick={() => setToggle(!toggle)}
              whileTap={{ scale: 0.92 }}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {toggle ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          style={{
            scaleX,
            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
          }}
        />
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setToggle(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-[#080818] border-l border-white/[0.07] p-8 md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-white text-lg tracking-tight">
                  {personalInfo.name.split(" ")[0]}
                  <span className="text-indigo-400">.dev</span>
                </span>
                <motion.button
                  onClick={() => setToggle(false)}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Nav links */}
              <ul className="flex flex-col gap-1.5 flex-1">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => { setToggle(false); setActive(link.id); }}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        active === link.id
                          ? "bg-indigo-500/12 text-indigo-300 border border-indigo-500/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <span className="font-mono text-indigo-500/70 text-xs">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Socials */}
              <div className="flex gap-2 pt-6 border-t border-white/[0.07]">
                {[
                  { href: personalInfo.github, icon: <GithubIcon size={15} />, label: "GitHub" },
                  { href: personalInfo.linkedin, icon: <LinkedinIcon size={15} /> },
                  { href: personalInfo.facebook, icon: <FacebookIcon size={15} /> },
                ].map(({ href, icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/8 text-gray-400 text-sm hover:text-white hover:border-white/20 transition-all",
                      label ? "flex-1 px-3" : "w-10"
                    )}
                  >
                    {icon}
                    {label && <span>{label}</span>}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
