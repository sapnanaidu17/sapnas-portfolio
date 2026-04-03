import { Mail, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-2xl mx-auto flex items-center justify-between">
      <p className="text-xs text-muted-foreground">© 2026 Sapna Naidu</p>
      <div className="flex items-center gap-4">
        <a
          href="mailto:sapnanaidu1709@gmail.com"
          aria-label="Email"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
        <a
          href="http://www.linkedin.com/in/sapna-naidu-543ba62ab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
