import { Code2, Linkedin, Github, Twitter, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "../components/ui/button";

export const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "MongoDB",
    "TailwindCSS",
  ];

  const socialLinks = [
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Mail, url: "#", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-portfolio-purple via-background to-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-blue p-2 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
                M.Logeshwaran
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer passionate about creating amazing web experiences that solve
              real-world problems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                  href={`#${link.name}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-white bg-card rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h4 className="font-semibold mb-2">Let's Build Something Amazing</h4>
              <p className="text-sm text-muted-foreground">
                Ready to turn your ideas into reality? Let's collaborate!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Your Name. All rights reserved. Built with{" "}
            <Heart className="inline w-4 h-4 text-portfolio-red" /> using React & Framer Motion
          </p>

          <Button
            size="icon"
            onClick={scrollToTop}
            className="rounded-full bg-primary hover:bg-primary/90"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
