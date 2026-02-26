const base = import.meta.env.BASE_URL;

export const symbol1 = base + "tutorial/symbol1.svg";
export const symbol2 = base + "tutorial/symbol2.svg";
export const symbol3 = base + "tutorial/symbol3.png";
export const symbol4 = base + "tutorial/symbol4.svg";
export const symbol5 = base + "tutorial/symbol5.svg";
export const symbol6 = base + "tutorial/symbol6.png";

import {
  RiPhoneFill,
  RiMailSendFill,
  RiUserLocationLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "Courses",
    href: "#courses",
  },
  {
    id: 3,
    label: "About Us",
    href: "#about",
  },
  {
    id: 4,
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: RiPhoneFill,
    label: "hello@reactdemo.com",
  },
  {
    id: 2,
    icon: RiMailSendFill,
    label: "+91 91813 23 2309",
  },
  {
    id: 3,
    icon: RiUserLocationLine,
    label: "Somewhere in the World",
  },
];

export const footerLists = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Benefits" },
      { label: "Our Courses" },
      { label: "Our Testimonials" },
      { label: "Our FAQ" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { label: "Company" },
      { label: "Achievements" },
      { label: "Our Goals" },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: RiFacebookBoxFill,
  },
  {
    id: 2,
    icon: RiTwitterFill,
  },
  {
    id: 3,
    icon: RiLinkedinFill,
  },
];

export const testimonialsItems = [
  {
    id: 1,
    text: "Great platform for beginners! Short lessons and clear tasks helped me improve quickly.",
    author: "Sarah L",
    img: "/images/testi-img-1.png",
  },
  {
    id: 2,
    text: "I love how interactive the exercises are. I finally feel confident building components on my own.",
    author: "Jason M",
    img: "/images/testi-img-2.png",
  },
  {
    id: 3,
    text: "This platform made learning React so much easier. The hands-on exercises helped me understand concepts I struggled with before.",
    author: "Emily R",
    img: "/images/testi-img-3.png",
  },
  {
    id: 4,
    text: "Perfect for practicing real-world React skills. The challenges are fun and kept me motivated every day.",
    author: "Michael K",
    img: "/images/testi-img-4.png",
  },
];

export const faqItems = [
  {
    id: 1,
    title: "Can I use the platform without any prior React experience?",
    text: "Absolutely! Our beginner-friendly lessons and guided exercises help you learn React step by step, even if you're completely new",
  },
  {
    id: 2,
    title: "Are the exercises suitable for advanced developers?",
    text: "Yes. We offer challenges ranging from basic component building to advanced topics like state management, performance optimization, and custom hooks.",
  },
  {
    id: 3,
    title: "Do I need to install anything to get started?",
    text: "No installation is required. All exercises run directly in your browser using our built-in React editor.",
  },
  {
    id: 4,
    title: "Can I track my progress?",
    text: "Yes, your progress is automatically saved. You can monitor your completed lessons, challenges, and skill improvements in your dashboard.",
  },
  {
    id: 5,
    title: "Is the platform free to use?",
    text: "We offer a free tier with essential lessons and exercises. Additional advanced tracks and projects are available in the Pro plan.",
  },
  {
    id: 6,
    title: "Can I practice building full React projects?",
    text: "Definitely! We provide structured project templates—from small widgets to fully functional apps—that guide you through building real-world React applications.",
  },
];
