import { Instagram, Facebook } from "lucide-react";
import cafeLogo from "@/assets/cafe-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={cafeLogo} 
              alt="The Cafe 1839 Hahndorf" 
              className="h-12 w-auto"
            />
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 The Cafe 1839 Hahndorf. Made with ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
