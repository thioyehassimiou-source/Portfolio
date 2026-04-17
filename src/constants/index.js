import bcaImg from "../assets/optimized/bca-connect.webp";
import campusMobileImg from "../assets/optimized/campus-connect-mobile.webp";
import campusWebImg from "../assets/optimized/campus-connect-web.webp";
import guineaImg from "../assets/optimized/guinea-logement.webp";
import servilinkImg from "../assets/optimized/servilink-web.webp";
import heroImg from "../assets/optimized/eot-scolaire.webp";

export const personalInfo = {
  name: "Hassimiou Thioye",
  title: "Développeur junior Full Stack en devenir",
  tagline:
    "Étudiant en Licence 2 Informatique à l'Université de Labé. Je construis des projets concrets pour progresser chaque jour en développement web et mobile.",
  email: "thioyehassimiou@gmail.com",
  whatsapp: "+224624193069",
  github: "https://github.com/thioyehassimiou-source",
  linkedin: "https://www.linkedin.com/in/hassimiou-thioye",
  facebook: "https://facebook.com/hassimiou.thioye",
  university: "Université de Labé",
  location: "Labé, Guinée",
};

export const navLinks = [
  { id: "accueil", title: "Accueil" },
  { id: "a-propos", title: "À propos" },
  { id: "competences", title: "Compétences" },
  { id: "projets", title: "Projets" },
  { id: "parcours", title: "Parcours" },
  { id: "interets", title: "Intérêts" },
  { id: "contact", title: "Contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML / CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Next.js", level: 50 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Django", level: 50 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    category: "Base de données",
    items: [
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 60 },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git / GitHub", level: 75 },
      { name: "VS Code", level: 85 },
      { name: "Flutter", level: 55 },
    ],
  },
];

export const projects = [
  {
    title: "BCA Connect (Elnex)",
    problem:
      "Les chaînes d'approvisionnement en Afrique souffrent de fragmentation, de coûts logistiques élevés, d'opacité et d'un manque de solutions de financement.",
    solution:
      "Écosystème B2B/B2C (MVP) avec algorithme de matchmaking, paiements sécurisés/échelonnés, gestion de litiges et suivi logistique en temps réel.",
    role: "Co-concepteur & Développeur Full Stack (avec Sory Keita). Création d'une plateforme gérant fournisseurs, clients, transporteurs, admins et modèles bancaires.",
    description:
      "Plateforme de gestion complète des chaînes d'approvisionnement pour l'entreprise Elnex, centralisant l'achat, le financement et la logistique.",
    tags: ["React", "Node.js", "PostgreSQL", "Logistique"],
    image: bcaImg,
    github: "https://github.com/sorail742/bcaconnect.git",
    demo: "https://bcaconnect.vercel.app",
    featured: true,
  },
  {
    title: "CampusConnect Mobile",
    problem:
      "Les étudiants et enseignants de l'Université de Labé géraient encore notes, présences et emplois du temps sur papier.",
    solution:
      "Application mobile Flutter avec authentification, consultation des notes, gestion des absences et emploi du temps en temps réel.",
    role: "Développeur mobile — développement complet en Flutter, intégration Supabase pour le backend.",
    description:
      "Application mobile pour la gestion académique : notes, présences et emploi du temps, pensée pour les étudiants de l'Université de Labé.",
    tags: ["Flutter", "Supabase", "MySQL"],
    image: campusMobileImg,
    github: "https://github.com/thioyehassimiou-source/campus-connect.git",
    demo: "https://drive.google.com/file/d/1yHueBEciq3z7Xh4dKOafJoY3OHN3ZsAN/view?usp=sharing",
    featured: true,
  },
  {
    title: "CampusConnect Web",
    problem:
      "Les étudiants et nouveaux bacheliers (notamment à l'Université de Labé) manquent d'informations claires et structurées sur les filières, départements et salles.",
    solution:
      "Plateforme académique incluant une gestion intelligente des salles, un système d'orientation étudiant et un tableau de bord interactif des données académiques.",
    role: "Développeur Full Stack — conception de l'architecture backend/frontend, intégration BDD, et mise en place de la sécurité des accès (RLS via Supabase).",
    description:
      "Plateforme numérique intelligente visant à centraliser et faciliter l'accès à l'information universitaire pour améliorer l'expérience des étudiants en Guinée.",
    tags: ["React / Next.js", "Django / Node.js", "Supabase"],
    image: campusWebImg,
    github: "#",
    demo: "https://campusconnect-web-ten.vercel.app",
    featured: false,
  },
  {
    title: "GuinéeLogement",
    problem:
      "Trouver un logement en Guinée est compliqué : les informations sont dispersées, peu fiables et l'accès aux offres requiert beaucoup de temps.",
    solution:
      "Plateforme centralisant les annonces avec mise en relation directe, incluant un système de filtrage avancé (prix, localisation, type de bien).",
    role: "Développeur Full Stack — architecture web (React), développement de l'API REST sécurisée et gestion de l'interface d'administration.",
    description:
      "Application web full-stack visant à moderniser la recherche immobilière en Guinée pour devenir la référence digitale du secteur.",
    tags: ["React / Vite", "Node.js / Django", "PostgreSQL"],
    image: guineaImg,
    github: "https://github.com/thioyehassimiou-source/mon-projet.git",
    demo: "https://frontend-arc7iqel4-hassimious-projects.vercel.app",
    featured: true,
  },
  {
    title: "ServiLink",
    problem:
      "Trouver un prestataire fiable en Guinée repose sur le bouche-à-oreille (opacité, perte de temps, manque de visibilité pour les professionnels).",
    solution:
      "Plateforme de mise en relation avec recherche avancée, profils de prestataires, système d'avis/notations et gestion des requêtes.",
    role: "Développeur Full Stack — conception globale de la plateforme, gestion des profils et intégration d'un système de mise en relation de confiance.",
    description:
      "Plateforme numérique visant à digitaliser, centraliser et moderniser le secteur des services informels en Guinée et en Afrique de l'Ouest.",
    tags: ["React / Next.js", "Node.js / Django", "Supabase / PostgreSQL"],
    image: servilinkImg,
    github: "https://github.com/thioyehassimiou-source/ServiLink.git",
    demo: "#",
    featured: false,
  },
  {
    title: "EOT — Gestion Scolaire",
    problem:
      "L'administration scolaire souffre d'un manque de communication école/parents, d'une gestion administrative manuelle et de problèmes récurrents d'absentéisme (école buissonnière).",
    solution:
      "Plateforme web et mobile dotée d'un module innovant de suivi parental (notifications automatiques d'arrivée/absence) et d'une centralisation des tâches.",
    role: "Développeur Full Stack — conception de l'architecture, intégration du système de notifications en temps réel et automatisation logicielle.",
    description:
      "Plateforme centralisée conçue pour moderniser le système éducatif en Guinée en améliorant la transparence et le suivi des élèves en temps réel.",
    tags: ["React / Flutter", "Node.js", "MySQL"],
    image: heroImg,
    github: "https://github.com/thioyehassimiou-source/EOT.git",
    demo: "https://eot-web.vercel.app",
    featured: false,
  },

];

export const experiences = [
  {
    period: "2024 — Présent",
    title: "Développeur indépendant",
    place: "Projets personnels & collaboratifs",
    description:
      "Conception et développement de 6+ projets web et mobiles pour résoudre des problèmes concrets en Guinée. Chaque projet est une opportunité d'apprendre de nouvelles technologies et de livrer des solutions fonctionnelles.",
    type: "code",
  },
  {
    period: "2023 — Présent",
    title: "Étudiant en Licence Informatique",
    place: "Université de Labé, Guinée",
    description:
      "Formation en algorithmique, bases de données, réseaux et programmation. Apprentissage continu en parallèle via des projets personnels pour mettre en pratique les connaissances théoriques.",
    type: "education",
  },
  {
    period: "2023 — 2025",
    title: "Chef de classe & Responsable étudiant",
    place: "Université de Labé",
    description:
      "Coordination de la promotion, relais entre étudiants et administration. Développement de compétences en leadership, organisation et communication au sein du groupe.",
    type: "leadership",
  },
];

export const languages = [
  { name: "Français", level: "Langue de travail (C2)", percentage: 100 },
  { name: "Anglais", level: "Technique (B1)", percentage: 65 },
  { name: "Pular", level: "Langue maternelle", percentage: 100 },
  { name: "Malinké", level: "Langue maternelle", percentage: 100 },
];

export const hobbies = [
  { 
    name: "Séries & Cinéma", 
    description: "Passionné par les récits captivants et la réalisation.",
    icon: "MonitorPlay" 
  },
  { 
    name: "Lecture", 
    description: "Focus sur les ouvrages techniques et inspirants.",
    icon: "BookOpen" 
  },
  { 
    name: "Dév. Personnel", 
    description: "Amélioration continue et psychologie.",
    icon: "Brain" 
  },
  { 
    name: "Veille Techno", 
    description: "Suivre l'évolution rapide de l'écosystème JS/Flutter.",
    icon: "Rss" 
  },
];
