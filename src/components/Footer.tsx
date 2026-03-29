import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Mohit Anand. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a href="https://github.com/coughlmao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <FaGithub className="h-4 w-4" />
        </a>
        <a href="https://linkedin.com/in/mohit-anand-560698231" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <FaLinkedin className="h-4 w-4" />
        </a>
        <a href="mailto:anandm.mohit@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <FaEnvelope className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
