const base = import.meta.env.BASE_URL;
import {
  RiCodeFill,
  RiDatabase2Line,
  RiDownloadLine,
  RiEyeLine,
  RiGithubFill,
  RiGlobalLine,
  RiLinkedinBoxFill,
  RiMailLine,
  RiStackOverflowFill,
  RiTwitterXFill,
  RiServerLine,
  RiShieldCheckLine,
} from "@remixicon/react";

const file02 = base + "portfolio/file-02.svg";
const searchMd = base + "portfolio/search-md.svg";
const plusSquare = base + "portfolio/plus-square.svg";
const homeSmile = base + "portfolio/home-smile.svg";

const blockchain = base + "portfolio/blockchain.jpg";
const network = base + "portfolio/network.png";
const healtHubMunich = base + "portfolio/healthhub.png";
const spotify = base + "portfolio/spotify.png";
const database = base + "portfolio/database.png";

export const socialLink = [
  {
    id: 1,
    icon: RiGithubFill,
  },
  {
    id: 2,
    icon: RiLinkedinBoxFill,
  },
  {
    id: 3,
    icon: RiTwitterXFill,
  },
  {
    id: 4,
    icon: RiStackOverflowFill,
  },
];

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#",
  },
  {
    id: 2,
    label: "About Me",
    href: "#about",
  },
  {
    id: 3,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    label: "Contact Me",
    href: "#contact",
  },
];

export const heroItems = [
  {
    id: 1,
    icon: RiCodeFill,
    subtitle: "Frontend",
    text: "React, TypeScript",
  },
  {
    id: 2,
    icon: RiDatabase2Line,
    subtitle: "Backend",
    text: "Node.js, Python, APIs",
  },
  {
    id: 3,
    icon: RiGlobalLine,
    subtitle: "DevOps",
    text: "AWS, Docker, CI/CD",
  },
];
export const aboutMeItems = [
  {
    id: 1,
    icon: RiServerLine,
    title: "Backend Systems",
  },
  {
    id: 2,
    icon: RiDatabase2Line,
    title: "Database Design",
  },
  {
    id: 3,
    icon: RiShieldCheckLine,
    title: "Web Security",
  },
];

export const heroBtns = [
  {
    id: 1,
    icon: RiEyeLine,
    label: "View My Work",
  },
  {
    id: 2,
    icon: RiMailLine,
    label: "Get In Touch",
  },
  {
    id: 3,
    icon: RiDownloadLine,
    label: "Download Resume",
  },
];

export const languages = [];
export const backend = [];
export const frontend = [];
export const devops = [];
export const databases = [];

export const aboutItems = [
  {
    id: 1,
    icon: base + "/portfolio/icon-1.svg",
    label: "Python",
  },
  {
    id: 2,
    icon: base + "/portfolio/icon-2.svg",
    label: "Next.js",
  },
  {
    id: 3,
    icon: base + "/portfolio/icon-3.svg",
    label: "JavaScript",
  },
  {
    id: 4,
    icon: base + "/portfolio/icon-4.svg",
    label: "Node.js",
  },
  {
    id: 5,
    icon: base + "/portfolio/icon-5.svg",
    label: "Java",
  },
  {
    id: 6,
    icon: base + "/portfolio/icon-6.svg",
    label: "Tailwind",
  },
  {
    id: 7,
    icon: base + "/portfolio/icon-7.svg",
    label: "MongoDB",
  },
  {
    id: 8,
    icon: base + "/portfolio/icon-8.svg",
    label: "PostgreSQL",
  },
  {
    id: 9,
    icon: base + "/portfolio/icon-9.svg",
    label: "Redis",
  },
  {
    id: 10,
    icon: base + "/portfolio/icon-10.svg",
    label: "Django",
  },
  {
    id: 11,
    icon: base + "/portfolio/icon-11.svg",
    label: "React",
  },
  {
    id: 12,
    icon: base + "/portfolio/icon-12.svg",
    label: "Vite",
  },

  {
    id: 13,
    icon: base + "/portfolio/icon-13.svg",
    label: "Docker",
  },
  {
    id: 14,
    icon: base + "/portfolio/icon-14.svg",
    label: "Github",
  },

  {
    id: 15,
    icon: base + "/portfolio/icon-15.svg",
    label: "HTML",
  },
  {
    id: 16,
    icon: base + "/portfolio/icon-16.svg",
    label: "Bash",
  },
  {
    id: 17,
    icon: base + "/portfolio/icon-17.svg",
    label: "C",
  },
  {
    id: 18,
    icon: base + "/portfolio/icon-18.svg",
    label: "IT Security",
  },
];

export const timelineItems = [
  {
    id: 1,
    title: "Softwareengineer, KI - Automation",
    list: ["Hurst & Land UG", "Munich"],
    time: "Apr 2026 - Now ",
  },
  {
    id: 2,
    title: "Working Student",
    list: ["TÜV Süd AG", "Munich"],
    time: "Aug 2023 - Feb 2026",
  },
  {
    id: 3,
    title: "Dispatcher",
    list: ["Base Holding GmbH", "Salzburg"],
    time: "Jan 2022 – Mai 2023",
  },
  {
    id: 4,
    title: "Software Tester",
    list: ["David Systems GmbH", "Munich"],
    time: "Jun 2019 – Nov 2019",
  },
];
export const timelineItems2 = [
  {
    id: 1,
    title: "M. Sc. Computer Science",
    list: ["University of Applid Science", "Munich"],
    time: "Apr 2026 - Okt 2027 ",
  },
  {
    id: 2,
    title: "B. Sc. Digitalization, Innovation & Society",
    list: ["Paris Lodron University", "Salzburg", "1,8"],
    time: "Okt 2021 - Okt 2025",
  },
];

export const projectsItems = [
  {
    id: 1,
    img: database,
    title: "Database Tuning",
    text: "Hands-on lab series focused on practical techniques to enhance database performance. Topics include schema design, query optimization, indexing strategies, join tuning, and concurrency control.",
    tags: ["PostgreSQL", "SQLite", "Python", "Bash"],
    link: "https://github.com/getintogit1/database-tuning",
  },
  {
    id: 2,
    img: blockchain,
    title: "Blockchain Voting",
    text: "A Python-based simulation of a secure, anonymous, and verifiable voting system built on blockchain principles using commutative encryption.",
    tags: ["Python", "RSA-Mentalpoker", "Massey Omura Cryptosystem"],
    link: "https://github.com/getintogit1/BBVS-blockchain-voting",
  },
  {
    id: 3,
    img: spotify,
    title: "Book Mark Songs",
    text: "A Django web app for bookmarking YouTube‐extracted songs, managing them in a personal library, and instantly adding them to Spotify playlists. Users can follow others, like saved songs, and view a real‑time activity feed and global song rankings powered by Redis.",
    tags: ["Django", "OAuth", "Redis", "HTML/CSS/JS"],
    link: "https://github.com/getintogit1/Bookmark-Songs",
  },
  {
    id: 4,
    img: healtHubMunich,
    title: "Health Hub Munich",
    text: "An Interactive Healthcare Visualization Platform (React + Django + D3) A full-stack web app for exploring health service density & access across Munich.",
    tags: ["React", "D3", "HTML/CSS/JS", "Django"],
    link: "https://github.com/getintogit1/Healthcare-Access-Platform",
  },
  {
    id: 5,
    img: network,
    title: "Scan My Net",
    text: "A robust Bash script designed for automated and continuous network scanning. It discovers active hosts, runs in-depth Nmap analyses, and enriches results with MAC vendor data",
    tags: ["Bash", "Nmap"],
    link: "https://github.com/getintogit1/ScanMyNet",
  },
];

export const certificates = [
  {
    id: 1,
    img: network,
    title: "Kali Linux",
  },
];
