import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Coffee className="w-6 h-6 text-accent transition-transform group-hover:rotate-12" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Aroma
            </span>
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
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Aroma Cafe. Made with ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
