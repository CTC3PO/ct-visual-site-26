export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imagePlaceholderColor: string;
  link?: string;
  github?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "dalat-app",
    title: "Dalat App",
    category: "Social Resource Systems",
    description: "A collaborative travel application designed to help users plan and navigate their trips to Dalat with interactive itineraries.",
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    imagePlaceholderColor: "#BBC3CF",
    link: "https://dalat.app/",
    github: "https://github.com/goldenfocus/dalat-app",
    image: "/projects/dalat.png"
  },
  {
    id: "housing-explorer",
    title: "Planning Housing Explorer",
    category: "Spatial Intelligence",
    description: "A 3D web app to explore and communicate NYC Department of City Planning's City of Yes initiative. Built with Three.js.",
    tags: ["React", "Three.js", "Node.js", "MongoDB"],
    imagePlaceholderColor: "#E5E7EB",
    link: "https://cif-ud-project.vercel.app/",
    github: "https://github.com/CTC3PO/planning-housing-tool",
    image: "/projects/housing.png"
  },
  {
    id: "nutri-global",
    title: "Food Nutri-score Prediction",
    category: "Data Policy Systems",
    description: "A machine learning project that combines Open Food Facts data (1M rows) and World bank data to predict and recommend nutri-score system adoption globally.",
    tags: ["pandas", "scikit-learn", "Jupyter notebook"],
    imagePlaceholderColor: "#D1D5DB",
    github: "https://github.com/CTC3PO/ml-nutri-score-prediction",
    image: "/projects/nutri.png"
  },
  {
    id: "rl-viz",
    title: "Pacman Q-Learning Agent",
    category: "Core Intelligence",
    description: "A reinforcement learning agent that learns to play Pacman through Q-learning and feature extraction. Navigates grids and avoids ghosts efficiently.",
    tags: ["Python", "AI", "Reinforcement Learning"],
    imagePlaceholderColor: "#8E97A1",
    github: "https://github.com/CTC3PO",
    image: "/projects/rl-viz.gif"
  },
  {
    id: "gen-ai-landscapes",
    title: "Generative AI for Virtual Environment",
    category: "Visionary Computing",
    description: "An advanced Unreal Engine project exploring generative AI techniques to build and texture immersive 3D landscapes.",
    tags: ["Unreal Engine", "Generative AI", "C++"],
    imagePlaceholderColor: "#9CA3AF",
    image: "/projects/genai.png"
  },
  {
    id: "mindful-life",
    title: "Mindful Life System",
    category: "Personal Intelligence",
    description: "A comprehensive platform dedicated to supporting mental well-being, featuring habit tracking and mindful living concepts.",
    tags: ["React", "TailwindCSS", "Systems Thinking"],
    imagePlaceholderColor: "#C5CCD8",
    link: "https://growth-track1.vercel.app/",
    github: "https://github.com/CTC3PO/growth-track",
    image: "/projects/mindful.png"
  }
];
