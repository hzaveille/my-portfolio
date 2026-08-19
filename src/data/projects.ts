export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  skills: string[];
  tools: string[];
  contribution: string;
  status: string;
  featured: boolean;
  images: string[];
  github?: string;
  demo?: string;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FinSage",
    category: "Mobile App Development",
    description:
      "Personal financial budgeting Android app, built solo as a Final Year Project — covering the full lifecycle from UI/UX design to implementation and testing.",
    skills: [
      "End-to-end solo ownership",
      "Android development",
      "In-code UI/UX design",
      "Testing",
    ],
    tools: ["Android Studio", "Java"],
    contribution:
      "Full solo project — designed, built, and tested independently. UI/UX was designed directly in code without external design tools.",
    status: "Completed",
    featured: true,
    images: ["/projects/finsage.jpg"],
  },

  {
    id: 2,
    title: "Mail Courier Dash / Delivery Bot",
    category: "Game Development",
    description:
      "A 2D Unity game where the player catches falling parcels for points while dodging bombs, with a three-heart lives system.",
    skills: [
      "Game planning",
      "Storyboarding",
      "Asset sourcing and integration",
      "Player movement implementation",
      "Team collaboration",
    ],
    tools: ["Unity"],
    contribution:
      "Sourced and integrated pixel art assets, implemented player movement, and contributed to gameplay planning through storyboarding.",
    status: "Completed",
    featured: true,
    images: ["/projects/mail-courier-dash.png"],
  },

  {
    id: 3,
    title: "Playground 3D Design",
    category: "2D/3D Multimedia",
    description:
      "A 3D playground scene modeled in Blender, combining individually designed assets with teammates' work into one cohesive scene.",
    skills: [
      "3D modeling",
      "Spatial and scene composition",
      "External asset integration",
      "Collaborative asset integration",
    ],
    tools: ["Blender"],
    contribution:
      "Personally modeled the monkey bar and outdoor exercise trainer. The dustbin asset was sourced externally from TurboSquid and integrated into the scene. The final combined scene was a team effort.",
    status: "Completed",
    featured: true,
    images: [
      "/projects/playground-monkey-bar.png",
      "/projects/playground-exercise-trainer.png",
      "/projects/playground-final.png",
    ],
  },

  {
    id: 4,
    title: "AskEllie",
    category: "Software Development / QA",
    description:
      "A Botpress-based chatbot designed to guide stakeholders through structured requirement gathering.",
    skills: ["Functional testing", "Test documentation", "QA process"],
    tools: ["Botpress"],
    contribution:
      "Served as Software Tester — conducted functional testing and documented the results.",
    status: "Completed",
    featured: false,
    images: ["/projects/askellie.png"],
  },

  {
    id: 5,
    title: "Penguin-Seal Shooter & Candy Kingdom Platformer",
    category: "Game Development",
    description: "Two solo games built individually using Construct 2D.",
    skills: ["Solo game design", "Level design"],
    tools: ["Construct 2D"],
    contribution:
      "Solo — both games were fully self-designed and built independently.",
    status: "Completed",
    featured: false,
    images: [
      "/projects/penguin-seal-shooter.png",
      "/projects/candy-kingdom.png",
    ],
    videos: [
      "/projects/penguin-seal-shooter.mp4",
      "/projects/candy-kingdom.mp4",
    ],
  },
];
