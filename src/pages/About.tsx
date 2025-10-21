import { motion } from "motion/react";
import { User, Clock, GraduationCap, Server, Layers } from "lucide-react";
import { ParticlesBackground } from "../components/ParticlesBackground";

export const About = () => {
  const personalInfo = [
    { label: "Name:", value: "M.Logeshwaran" },
    { label: "Role:", value: "Full Stack Developer" },
    { label: "Experience:", value: "New" },
    { label: "Location:", value: "Available Worldwide" },
  ];

  const journey = [
    {
      year: "2024",
      title: "Started Learning",
      description: "Began my journey with HTML, CSS, and JavaScript",
      icon: GraduationCap,
      color: "bg-portfolio-blue",
    },
    {
      year: "2024",
      title: "Backend Development",
      description: "Learned Django, Express.js and database management",
      icon: Server,
      color: "bg-portfolio-green",
    },
    {
      year: "2025",
      title: "First Framework",
      description: "Mastered React and started building dynamic applications",
      icon: Layers,
      color: "bg-portfolio-cyan",
    },
    {
      year: "2025",
      title: "Full Stack Projects",
      description: "Built complete web applications from frontend to backend",
      icon: Layers,
      color: "bg-portfolio-purple",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-16" id="About">
      {/* Dark background */}
      <div className="absolute inset-0 bg-background -z-20" />
      <ParticlesBackground />

      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-cyan bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer who loves building modern web applications that solve real
            problems. With expertise in both frontend and backend technologies, I create seamless
            digital experiences that users love and businesses rely on.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-portfolio-blue" />
              <h2 className="text-2xl font-bold">Personal Info</h2>
            </div>

            <div className="space-y-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground italic">
                "I believe in writing clean, maintainable code and creating user experiences that are
                both beautiful and functional. Every project is an opportunity to learn something new
                and push the boundaries of what's possible."
              </p>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-portfolio-purple" />
              <h2 className="text-2xl font-bold">My Journey</h2>
            </div>

            <div className="space-y-6">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < journey.length - 1 && (
                        <div className="w-0.5 h-full bg-border my-2" />
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="text-portfolio-blue font-semibold">{item.year}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
