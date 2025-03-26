export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    skills: string[];
    demoUrl: string;
    githubUrl: string;
  }
  
  export interface Skill {
    name: string;
    level: number; // 1-5
    category: 'frontend' | 'backend' | 'tools' | 'design';
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Food Ordering PlatForm",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB. Features include email notifications, product search etc.",
      image: "https://i.ibb.co/p6Z8t10Q/Screenshot-2025-03-14-011758.png",
      skills: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "NodeMailer"],
      demoUrl: "https://great-indian-restrauant-qt12.vercel.app/",
      githubUrl: "https://github.com/kprince612/Great_Indian_Restrauant",
    },
    {
      id: 2,
      title: "Chat Room Application",
      description: "A Real-Time chat application with real-time updates and includes google authentication, filtering of letters, and team collaboration features. Built with React, Supabase, and Tailwind CSS.",
      image: "https://i.ibb.co/FkCktgtZ/Screenshot-2025-03-14-013327.png",
      skills: ["React", "Supabase", "Tailwind CSS", "Framer Motion", "Google Authentication", "Next.js"],
      demoUrl: "https://chat-app1-psi.vercel.app/",
      githubUrl: "https://github.com/kprince612/ChatApp_Supabase",
    },
    {
      id: 3,
      title: "Online bus booking Application",
      description: "A fully responsive Ticket Booking platform built with React, Node.js, Tailwind CSS and MongoDB. Features include email notifications, Bus Searing, QR Code Ticket etc. Admin Panel for Admin.",
      image: "https://i.ibb.co/kV5k694G/Screenshot-2025-03-14-012542.png",
      skills: ["React", "MongoDB", "Express", "Node.js", "NodeMailer"],
      demoUrl: "https://dtc-bus-end-user.vercel.app/",
      githubUrl: "https://github.com/kprince612/dtc_bus_end_user",
    },
  ];
  
  export const skills: Skill[] = [
    { name: "React", level: 5, category: "frontend" },
    { name: "JavaScript", level: 5, category: "frontend" },
    { name: "TypeScript", level: 4, category: "frontend" },
    { name: "HTML", level: 5, category: "frontend" },
    { name: "CSS", level: 5, category: "frontend" },
    { name: "Tailwind CSS", level: 5, category: "frontend" },
    { name: "Next.js", level: 4, category: "frontend" },
    { name: "Redux", level: 4, category: "frontend" },
    { name: "Node.js", level: 4, category: "backend" },
    { name: "Express", level: 4, category: "backend" },
    { name: "MongoDB", level: 3, category: "backend" },
    { name: "PostgreSQL", level: 3, category: "backend" },
    { name: "Firebase", level: 4, category: "backend" },
    { name: "Supabase", level: 4, category: "backend" },
    { name: "REST API", level: 4, category: "backend" },
    { name: "Git", level: 4, category: "tools" },
    { name: "GitHub", level: 4, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
    { name: "PostMan", level: 5, category: "tools" },
    { name: "Figma", level: 3, category: "design" },
    { name: "Adobe XD", level: 3, category: "design" },
  ];
  
  export const socialLinks = {
    github: "https://github.com/kprince612/",
    linkedin: "https://www.linkedin.com/in/prince-khandelwal-46413a288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "khandelwalprince612@gmail.com",
  };