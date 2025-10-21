import { motion } from "motion/react";
import { Folder, Mail, Rocket, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { ParticlesBackground } from "../components/ParticlesBackground";

export const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple via-background to-background -z-20" />
      
      {/* Particles */}
      <ParticlesBackground />

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 bg-portfolio-blue rounded-full flex items-center justify-center"
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/3 w-12 h-12 bg-portfolio-orange rounded-full flex items-center justify-center"
      >
        <Folder className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-portfolio-green rounded-full"
      />

      {/* 3D Geometric Shape */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-portfolio-purple/30" />
        <div className="absolute inset-8 rounded-full border-2 border-portfolio-blue/30" />
        {/* Wireframe cube */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <div className="absolute inset-0 border-2 border-portfolio-blue/50" style={{ transform: "rotateY(0deg) translateZ(64px)" }} />
          <div className="absolute inset-0 border-2 border-portfolio-purple/50" style={{ transform: "rotateY(90deg) translateZ(64px)" }} />
          <div className="absolute inset-0 border-2 border-portfolio-cyan/50" style={{ transform: "rotateY(180deg) translateZ(64px)" }} />
          <div className="absolute inset-0 border-2 border-portfolio-green/50" style={{ transform: "rotateY(270deg) translateZ(64px)" }} />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-portfolio-blue via-portfolio-cyan to-portfolio-purple bg-clip-text text-transparent">
                M.Logeshwaran
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Full Stack Developer
              </h2>
              <p className="text-xl md:text-2xl text-foreground mb-12">
                Building Web Experiences that make people say{" "}
                <span className="font-bold text-portfolio-orange">WHOA</span>{" "}
                <Rocket className="inline w-6 h-6 text-portfolio-orange" />
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#Projects">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                  >
                    <Folder className="mr-2 w-5 h-5" />
                    View Projects
                  </Button>
                </a>
                <a href="#Contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-portfolio-purple text-foreground hover:bg-portfolio-purple/10 rounded-full px-8"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Contact Me
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.div>
    </div>
  );
};
