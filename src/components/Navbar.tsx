import { Code2, Home, User, Code, Briefcase, Mail} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isActive,setIsActive]=useState('Home')

  const navItems = [
    { name: "Home",  icon: Home },
    { name: "About", icon: User },
    { name: "Skills", icon: Code },
    { name: "Projects", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      id="Home"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <div className="bg-gradient-blue p-2 rounded-lg">
            <Code2 className="w-6 h-6 text-white" />
          </div>          
          <span className="text-xl font-bold bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">
            M.Logeshwaran
          </span>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a href={`#${item.name}`} key={item.name} onClick={()=>
                setIsActive(item.name)
              }>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center gap-2 rounded-full px-4 ${
                    isActive===item.name
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-card"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};
