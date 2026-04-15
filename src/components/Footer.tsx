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
              alt="The Cafe 1839 — Best Cafe in Hahndorf SA" 
              className="h-12 w-auto"
            />
          </a>

          {/* NAP - Name Address Phone for Local SEO */}
          <address className="not-italic text-center text-sm text-muted-foreground leading-relaxed">
            <strong>The Cafe 1839 Hahndorf</strong><br />
            Shop 3/56 Mount Barker Rd, Hahndorf SA 5245<br />
            <a href="tel:+61452583301" className="hover:text-foreground transition-colors">0452 583 301</a> · <a href="mailto:thecafe1839@gmail.com" className="hover:text-foreground transition-colors">thecafe1839@gmail.com</a>
          </address>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/thecafe1839"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="The Cafe 1839 Hahndorf on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1FWTm2GCJ9/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="The Cafe 1839 Hahndorf on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          © 2024 The Cafe 1839 Hahndorf. Made with ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
