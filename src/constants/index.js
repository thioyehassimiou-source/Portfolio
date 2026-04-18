import bcaImg from "../assets/optimized/bca-connect.webp";
import campusMobileImg from "../assets/optimized/campus-connect-mobile.webp";
import guineaImg from "../assets/optimized/guinea-logement.webp";
import heroImg from "../assets/optimized/eot-scolaire.webp";
import medsyncImg from "../assets/optimized/medsync.webp";
import afrilearnImg from "../assets/optimized/afrilearn.webp";

export const personalInfo = {
  name: "Hassimiou Thioye",
  title: "Développeur Full-Stack (Web & Mobile)",
  tagline:
    "Je transforme des problématiques métier complexes en applications performantes. Spécialisé en React, Node.js et Flutter, je conçois des solutions innovantes centrées sur l'utilisateur et l'impact réel.",
  email: "thioyehassimiou@gmail.com",
  whatsapp: "+224624193069",
  github: "https://github.com/thioyehassimiou-source",
  linkedin: "https://www.linkedin.com/in/hassimiou-thioye",
  facebook: "https://www.facebook.com/hassimiou.thioye.2025",
  university: "Université de Labé",
  location: "Labé, Guinée",
};

export const navLinks = [
  { id: "accueil", title: "Accueil" },
  { id: "a-propos", title: "Approche" },
  { id: "competences", title: "Expertise" },
  { id: "projets", title: "Projets d'Impact" },
  { id: "parcours", title: "Parcours" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  {
    category: "Architecture Frontend",
    items: [
      { name: "HTML5 / CSS3", status: "Avancé" },
      { name: "React & Next.js", status: "Intermédiaire" },
      { name: "JavaScript (ES6+)", status: "Avancé" },
      { name: "Tailwind CSS", status: "Avancé" },
      { name: "Flutter (Mobile)", status: "Intermédiaire" },
    ],
  },
  {
    category: "Backend & API",
    items: [
      { name: "Node.js (Express)", status: "Intermédiaire" },
      { name: "Django (Python)", status: "Intermédiaire" },
      { name: "Supabase / Firebase", status: "Intermédiaire" },
      { name: "API REST", status: "Avancé" },
    ],
  },
  {
    category: "Données & Ops",
    items: [
      { name: "PostgreSQL / MySQL", status: "Intermédiaire" },
      { name: "Git / GitHub Ops", status: "Intermédiaire" },
      { name: "Linux / Deployment", status: "Intermédiaire" },
      { name: "Docker", status: "En apprentissage" },
    ],
  },
  {
    category: "Ingénierie & Fondamentaux",
    items: [
      { name: "Algorithmes & Struc. de données", status: "Académique" },
      { name: "Conception SI (UML)", status: "Transversal" },
      { name: "Langage C", status: "Bases" },
      { name: "Python (Bases)", status: "Bases" },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "IDE IA (Cursor, Windsurf)", status: "Avancé" },
      { name: "Agents IA (Antigravity, Claude)", status: "Avancé" },
      { name: "VS Code & Terminal", status: "Avancé" },
      { name: "Figma (UI/UX)", status: "Avancé" },
    ],
  },
];

export const projects = [
  {
    title: "BCA Connect — Logistique B2B",
    problem:
      "Fragmentation extrême et opacité des chaînes d'approvisionnement en Afrique de l'Ouest.",
    solution:
      "Écosystème B2B complet automatisant le matchmaking logistique et sécurisant les paiements échelonnés.",
    impact: "MVP opérationnel rationalisant les flux pour Elnex et ses partenaires bancaires.",
    role: "Développeur Full-Stack — Conception de la plateforme et du modèle de données.",
    description:
      "Plateforme de gestion centralisée (Elnex) gérant acheteurs, fournisseurs et transporteurs avec suivi temps réel.",
    tags: ["React", "Node.js", "PostgreSQL", "Architecture"],
    image: bcaImg,
    github: "https://github.com/sorail742/bcaconnect.git",
    demo: "https://bcaconnect.vercel.app",
    featured: true,
  },
  {
    title: "CampusConnect Mobile",
    problem:
      "Gestion académique manuelle et lente (notes, présences) impactant 5000+ étudiants.",
    solution:
      "Application mobile cross-platform centralisant les services académiques en temps réel.",
    impact: "Digitalisation complète du flux de consultation des notes pour l'Université de Labé.",
    role: "Développeur Mobile — Développement Flutter et synchronisation sécurisée via Supabase.",
    description:
      "Application mobile nativement réactive pour la consultation instantanée des performances académiques.",
    tags: ["Flutter", "Supabase", "UX Mobile"],
    image: campusMobileImg,
    github: "https://github.com/thioyehassimiou-source/campus-connect.git",
    demo: "https://drive.google.com/file/d/1yHueBEciq3z7Xh4dKOafJoY3OHN3ZsAN/view?usp=sharing",
    featured: true,
  },
  {
    title: "GuinéeLogement",
    problem:
      "Marché immobilier opaque et accès difficile aux annonces fiables pour les citoyens.",
    solution:
      "Portail immobilier centralisé avec système de filtrage multicritères et mise en relation directe.",
    impact: "Digitalisation du parcours de recherche de logement en Guinée.",
    role: "Concepteur Full Stack — Architecture de l'API REST et interface d'administration.",
    description:
      "Application web optimisée pour une recherche fluide et sécurisée sur le marché foncier guinéen.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    image: guineaImg,
    github: "https://github.com/thioyehassimiou-source/mon-projet.git",
    demo: "https://frontend-arc7iqel4-hassimious-projects.vercel.app",
    featured: true,
  },
  {
    title: "EOT — Éducation Transparente",
    problem:
      "Absence de suivi parental et manque de transparence dans le parcours scolaire secondaire.",
    solution:
      "Système de notification automatique school-to-home pour les présences et les performances.",
    impact: "Renforcement du lien parents-école et réduction drastique de l'absentéisme non signalé.",
    role: "Développeur Backend — Logique de notification et automatisation des reportings.",
    description:
      "Outil de pilotage académique assurant une communication fluide et transversale.",
    tags: ["React", "Node.js", "Firebase"],
    image: heroImg,
    github: "https://github.com/thioyehassimiou-source/EOT.git",
    demo: "https://eot-web.vercel.app",
    featured: false,
  },
  {
    title: "MedSync Pro",
    problem:
      "Gestion inefficace et perte des dossiers médicaux patients dans les cliniques locales.",
    solution:
      "Système centralisé de gestion avec accès hors-connexion et synchronisation asynchrone.",
    impact: "Améliorer la traçabilité médicale dans les zones à faible connectivité.",
    role: "Développeur Full-Stack — Conception initiale de l'architecture offline-first.",
    description:
      "Plateforme médicale robuste pensée pour les environnements réseau instables, synchronisant les données en arrière-plan.",
    tags: ["React", "Node.js", "PWA"],
    image: medsyncImg,
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "AfriLearn AI",
    problem:
      "Manque de suivi personnalisé pour la préparation des examens nationaux (Baccalauréat).",
    solution:
      "Assistant éducatif intelligent générant des parcours de révision sur-mesure.",
    impact: "Démocratiser un tutorat de qualité adapté au programme local grâce à l'IA.",
    role: "Développeur Full-Stack & IA — Intégration LLM et logique de génération de quiz.",
    description:
      "Application de e-learning adaptative propulsée par l'intelligence artificielle pour un accompagnement individualisé.",
    tags: ["Next.js", "Python", "OpenAI API"],
    image: afrilearnImg,
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const experiences = [
  {
    period: "2024 — Présent",
    title: "Full Stack Developer (Freelance)",
    place: "Solutions Numériques & Impact Social",
    description:
      "Conception et livraison de 6+ applications web et mobiles répondant à des problématiques réelles : logistique, immobilier, éducation. Focus sur l'évolutivité et la performance.",
    type: "code",
  },
  {
    period: "2023 — Présent",
    title: "Formation en Ingénierie Logicielle",
    place: "Université de Labé, Guinée",
    description:
      "Acquisition de bases solides en algorithmique, conception de systèmes d'information (UML), et développement d'applications structurées.",
    type: "education",
  },
  {
    period: "2023 — 2025",
    title: "Leadership & Gestion de Groupe",
    place: "Université de Labé",
    description:
      "Coordination de projets académiques et relais administratif. Développement de compétences en gestion de crise et communication d'équipe.",
    type: "leadership",
  },
];

export const languages = [
  { name: "Français", level: "Maîtrise complète (Bilingue)", percentage: 100 },
  { name: "Anglais", level: "Technique (B1)", percentage: 65 },
  { name: "Pular", level: "Langue maternelle", percentage: 100 },
  { name: "Malinké", level: "Langue maternelle", percentage: 100 },
];

export const hobbies = [
  { 
    name: "Veille Technologique", 
    description: "Exploration constante de l'écosystème JS et des architectures Cloud.",
    icon: "Rss" 
  },
  { 
    name: "Lecture & Analyse", 
    description: "Focus sur les ouvrages d'ingénierie et de développement personnel.",
    icon: "BookOpen" 
  },
  { 
    name: "Cultures & Langues", 
    description: "Passionné par la diversité linguistique et son impact sur la pensée.",
    icon: "Brain" 
  },
];
