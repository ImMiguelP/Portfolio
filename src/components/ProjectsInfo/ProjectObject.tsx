import {
  SiChakraui,
  SiSupabase,
  SiRemix,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiPrisma,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const projects = [
  {
    name: "InReach",
    title: "Employee",
    desc: "Empower your influencer marketing campaigns with real-time social media metrics. Creators can effortlessly track their reach, engagement, and performance directly from social media platforms as their campaigns unfold. Unlock data-driven insights and optimize your marketing strategy with InReach, the ultimate solution for influencers and marketers alike.",
    link: "https://www.inreach.gg/",
    images: "/images/projects/inreach.png",
    task: ["Web Design", "Front End Development", "UI/UX Design"],
    tech: [
      <SiReact key="" size="18px" />,
      <SiTypescript key="" size="18px" />,
      <SiTailwindcss key="" size="18px" />,
    ],
  },
  {
    name: "Ethereum",
    title: "Contributor",
    desc: "The official platform for Ethereum, a leading blockchain technology for decentralized applications and smart contracts. It provides valuable resources, guides, and insights for developers, enthusiasts, and investors, empowering them to explore and contribute to the world of decentralized finance and blockchain innovations.",
    link: "https://ethereum.org/en/",
    git: "https://github.com/ImMiguelP/ethereum-org-website",
    images: "/images/projects/eth1.png",
    task: ["Web Design", "Front End Development", "UI/UX Design"],
    tech: [
      <SiReact key="" size="18px" />,
      <SiTypescript key="" size="18px" />,
      <SiChakraui key="" size="18px" />,
    ],
  },
  {
    name: "Musy",
    title: "Contributor",
    desc: "Musy is your gateway to a new world of music sharing and discovery. With Musy, you can seamlessly connect to your Spotify account and explore what music your friends are listening to, liking, or adding to their playlists. Share your favorite tracks, discover hidden gems, and connect with like-minded music enthusiasts.",
    link: "https://musy.one/",
    git: "https://github.com/laurentlucian/musy",
    images: "/images/projects/musy2.png",
    task: ["Web Design", "Front End Development", "UI/UX Design"],
    tech: [
      <SiRemix key="" size="18px" />,
      <SiTypescript key="" size="18px" />,
      <SiChakraui key="" size="18px" />,
      <SiPrisma key="" size="18px" />,
    ],
  },
  {
    name: "Instagram Clone",
    desc: "A faithful Instagram replica, designed for educational purposes. Snap, post, and connect just like on Instagram. Share your world with photos and stories, engage with friends through likes and comments, and explore trending content. It's Instagram, recreated for you.",
    title: "Creator",
    git: "https://github.com/ImMiguelP/instagram-clone",
    images: "/images/projects/ig1.png",
    task: ["Web Design", "Front End Development", "UI/UX Design"],
    tech: [
      <SiReact key="" size="18px" />,
      <SiJavascript key="" size="18px" />,
      <SiChakraui key="" size="18px" />,
      <SiSupabase key="" size="18px" />,
    ],
  },
  {
    name: "Portfolio",
    title: "Creator",
    desc: "A showcase of my journey as a front-end web developer. Explore a collection of projects I've created, each highlighting my skills and passion for web development. Discover the technologies I've mastered, from JavaScript and TypeScript to React and more. Get inspired and see what's possible in the world of web development through my work.",
    git: "https://github.com/ImMiguelP/Port",
    images: "/images/projects/port1.png",
    task: ["Web Design", "Front End Development", "UI/UX Design"],
    tech: [
      <TbBrandNextjs key="" size="18px" />,
      <SiTypescript key="" size="18px" />,
      <SiTailwindcss key="" size="18px" />,
    ],
  },
];
