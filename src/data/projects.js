export const projects = [
  // Internships
  {
    id: 1,
    title: "IoT Dashboard & Analytics",
    category: "Stages & Expérience",
    role: "Stagiaire Data Analyst",
    date: "Mars 2025 - Avril 2025",
    description: "Conception d’un tableau de bord interactif Power BI basé sur des données issues de capteurs (température, humidité, niveau d’eau, nutriments) et d’actionneurs automatisés.",
    images: [
      "Dasheboard page.png",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["Power BI", "DAX", "IoT", "Data Visualization"],
    details: "Création de 4 pages dynamiques avec KPI, graphiques temporels (jour, mois, heure), et analyses croisées. Analyse des corrélations entre arrosage automatique et évolution des nutriments (azote, phosphore, potassium). Utilisation de DAX pour le calcul d’indicateurs personnalisés (somme, moyenne, max) et modélisation logique.",
    link: "#"
  },

  // Competitions
  {
    id: 2,
    title: "Robot Suiveur de Ligne (1er Prix ENSET)",
    category: "Compétitions & Hackathons",
    role: "Chef de Projet / Développeur",
    date: "2024",
    description: "Conception d’un robot suiveur de ligne télécommandé et autonome pour une compétition 1 vs 1. Remporté le 1er prix à l'ENSET Mohammedia.",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["Arduino", "Robotique", "C++", "Électronique"],
    details: "Développement des algorithmes de suivi de ligne et de navigation autonome. Optimisation de la vitesse et de la précision pour la compétition.",
    link: "#"
  },
  {
    id: 3,
    title: "Robot Intelligent (1er Prix EHTP)",
    category: "Compétitions & Hackathons",
    role: "Développeur",
    date: "2024",
    description: "Développement d’un robot suiveur de ligne intelligent avec détection et évitement automatique des obstacles. 1er Prix au Hackathon EHTP Casablanca.",
    images: [
      "/photos-for.png",
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["Arduino", "Capteurs", "Algorithmique"],
    details: "Implémentation de capteurs ultrasoniques pour la détection d'obstacles et logique d'évitement fluide.",
    link: "#"
  },
  {
    id: 4,
    title: "Robot Télécommandé (3e Place ENIM)",
    category: "Compétitions & Hackathons",
    role: "Concepteur",
    date: "2023",
    description: "Conception d’un robot suiveur de ligne et télécommandé. Pilotage réussi sur un parcours complexe et technique en deux phases.",
    images: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2532&auto=format&fit=crop",
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["Robotique", "Télécommande", "Hardware"],
    details: "3ème place au Hackathon ENIM Rabat.",
    link: "#"
  },

  // Academic
  {
    id: 5,
    title: "Analyse des Ventes Adidas",
    category: "Projets Académiques",
    date: "Mars 2025",
    description: "Création d’un tableau de bord interactif Power BI pour analyser les ventes Adidas aux États-Unis.",
    images: [
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["Power BI", "DAX", "SQL", "Analysis"],
    details: "KPIs clés : Total des ventes, bénéfices, marge bénéficiaire. Visualisations : Carte géographique, treemap, graphiques dynamiques. Optimisation des décisions grâce à l’analyse des produits et des régions.",
    link: "#"
  },
  {
    id: 6,
    title: "Gestion Base de Données CMC",
    category: "Projets Académiques",
    date: "Février 2024",
    description: "Conception et gestion de la base de données du CMC (Centre Métiers et Compétences).",
    images: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2121&auto=format&fit=crop",
      "/photos-for.png",
      "/ME.png"
    ],
    tags: ["MySQL", "SQL Workbench", "Database Design"],
    details: "Développement de requêtes SQL (CRUD). Définition des structures de tables, attributs et types de données pour un stockage optimisé.",
    link: "#"
  }
];

export const personalInfo = {
  name: "FADOUL Hatim",
  role: "Intelligence Artificielle (IA) & Data Analysis | Power BI • Python • SQL",
  profileImage: "/photos-for.png", // Correct path for file in public folder
  bio: "Diplômé en analyse de données et intelligence artificielle du CMC Rabat. Curieux, motivé et déterminé, je souhaite mettre à profit mes compétences techniques pour contribuer à des projets innovants.",
  quote: "Curieux, motivé et déterminé",
  contact: {
    email: "fadoulhatim@gmail.com",
    phone: "+212 767 313 220",
    location: "Rabat, Maroc",
    github: "https://github.com/7atimf", // Placeholder if not provided
    linkedin: "https://www.linkedin.com/in/hatimfadoul/", // Placeholder if not provided
    instagram: "https://www.instagram.com/hatim.fadoul/" // Placeholder
  },
  skills: [
    "Python (Pandas, NumPy, Scikit-learn)",
    "Power BI & DAX",
    "SQL (MySQL)",
    "R",
    "Robotique & Arduino",
    "Design & Montage Vidéo"
  ],
  education: [
    {
      degree: "Technicien Spécialisé en AI (Option Assistant Data Analyst)",
      school: "CMC, Rabat",
      year: "2023 – 2025"
    },
    {
      degree: "Baccalauréat Science Mathématique",
      school: "Lycée Molay Rachid, Mecharaa Bel Ksiri",
      year: "2021 – 2022"
    }
  ],
  languages: [
    { name: "Arabe", level: 100 },
    { name: "Français", level: 65 },
    { name: "Anglais", level: 40 }
  ]
};
