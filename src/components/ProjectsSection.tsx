import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from 'react-icons/fa'
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import taskManagerImg from "@/assets/task-manager-banner.png";
import interviewPlatformImg from "@/assets/interview-platform-banner.png";
import dappXWeb3Img from "@/assets/dappx-web3-banner.png";
import mernChatAppImg from "@/assets/mern-chat-app-banner.png"

type Project = {
  id: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  color: string;
  codeUrl?: string;
  demoUrl?: string;
};

const projects = [
  {
    id: "talent-iq-farm",
    title: "Talent IQ - FARM Stack",
    desc: "Talent IQ is a real-time collaborative coding interview platform built which lets users create and join live coding sessions with video calling, chat, and an in-browser code editor.",
    image: interviewPlatformImg,
    tags: ["FastAPI", "FARM", "React Query", "Beanie", "Clerk", "Inngest", "Stream", "PistonAPI", "Monaco Editor"],
    color: "from-primary/15 to-primary/5",
    codeUrl: "https://github.com/coughlmao/FARM-talent-iq",
    demoUrl: "https://farm-talent-iq.onrender.com/",
  },
  {
    id: "task-manager-mern",
    title: "Task Manager - MERN Stack",
    desc: "A comprehensive full-stack task management application which enables teams to efficiently manage tasks, collaborate, track progress, and generate detailed reports.",
    image: taskManagerImg,
    tags: ["Node.js", "MERN", "JWT", "RBAC", "Multer", "React Context API", "Charts"],
    color: "from-primary/20 to-primary/5",
    codeUrl: "https://github.com/Neeraj111010/Task-Manager",
    demoUrl: "https://mern-task-manager-pkfy.onrender.com",
  },
  {
    id: "talent-iq-mern",
    title: "Talent IQ - MERN Stack",
    desc: "Talent IQ is a real-time collaborative coding interview platform built which lets users create and join live coding sessions with video calling, chat, and an in-browser code editor.",
    image: interviewPlatformImg,
    tags: ["Node.js", "MERN", "React Query", "Clerk", "Inngest", "Stream", "PistonAPI", "Monaco Editor"],
    color: "from-primary/15 to-primary/5",
    codeUrl: "https://github.com/coughlmao/MERN-Interview-Platform-talent-IQ",
    demoUrl: "https://mern-interview-platform-talent-iq.onrender.com/",
  },
  {
    id: "dappX-funds-web3-nextjs",
    title: "Dapp X Funds - Next.js (Web3)",
    desc: "Dapp Funds X is a full-stack Web3 crowdfunding application where users can create charity campaigns and receive on-chain donations. This project was done to try learn Web3 for a hackathon.",
    image: dappXWeb3Img,
    tags: ["Next.js", "TypeScript", "Hardhat", "Solidity"],
    color: "from-primary/15 to-primary/5",
    codeUrl: "https://github.com/coughlmao/Web3-HackOn",
    demoUrl: "",
  },
  {
    id: "chat-app-mern",
    title: "Chat App - MERN Stack",
    desc: "A real-time chat application with video caling features.",
    image: mernChatAppImg,
    tags: ["Node.js", "MERN", "TanStack Query", "Zustand", "Stream"],
    color: "from-primary/15 to-primary/5",
    codeUrl: "https://github.com/coughlmao/MERN-Chat-Application",
    demoUrl: "",
  },
] satisfies Project[];

const ProjectsSection = () => {
  const { toast } = useToast();
  const [imageLoadFailed, setImageLoadFailed] = useState<Record<string, boolean>>({});
  const TOAST_AUTO_DISMISS_MS = 3000;

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCodeClick = (project: Project) => {
    if (project.codeUrl) {
      openExternal(project.codeUrl);
      return;
    }

    const { dismiss } = toast({
      title: "Code link unavailable",
      description: `Code repository for ${project.title} will be added soon.`,
    });
    setTimeout(dismiss, TOAST_AUTO_DISMISS_MS);
  };

  const handleDemoClick = (project: Project) => {
    if (project.demoUrl) {
      openExternal(project.demoUrl);
      return;
    }

    const { dismiss } = toast({
      title: "Live demo unavailable",
      description: `Live demo for ${project.title} will be added soon.`,
    });
    setTimeout(dismiss, TOAST_AUTO_DISMISS_MS);
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="font-heading text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors">
                    {`{${i + 1}}`}
                  </span>
                </div>
                {!imageLoadFailed[project.id] && (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    onError={() =>
                      setImageLoadFailed((prev) => ({
                        ...prev,
                        [project.id]: true,
                      }))
                    }
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCodeClick(project)}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <FaGithub className="h-4 w-4 mr-1.5" /> Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDemoClick(project)}
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
