import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Linkedin, Github, Twitter, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ParticlesBackground } from "../components/ParticlesBackground";
import { useState } from "react";

export const Contact = () => {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      color: "bg-portfolio-blue",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Available Worldwide",
      color: "bg-portfolio-green",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      color: "bg-portfolio-purple",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "bg-[#0077B5] hover:bg-[#006399]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      color: "bg-[#333] hover:bg-[#24292e]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "bg-[#1DA1F2] hover:bg-[#1a8cd8]",
    },
    {
      name: "Email",
      icon: Mail,
      url: "#",
      color: "bg-portfolio-red hover:bg-portfolio-red/90",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-16" id="Contact">
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
            Let's{" "}
            <span className="bg-gradient-to-r from-portfolio-red to-portfolio-orange bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create
            something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-portfolio-blue" />
              <h2 className="text-2xl font-bold">Send Message</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input placeholder="Enter your full name" className="bg-muted/50" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-muted/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  maxLength={maxChars}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="bg-muted/50 resize-none"
                />
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {charCount}/{maxChars}
                </div>
              </div>

              <Button size="lg" className="w-full rounded-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Quick Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-portfolio-cyan" />
                <h2 className="text-2xl font-bold">Quick Contact</h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Follow Me */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="w-6 h-6 text-portfolio-green" />
                <h2 className="text-2xl font-bold">Follow Me</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`${social.color} border-0 text-white`}
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5 mr-2" />
                        {social.name}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-portfolio-green/20 to-portfolio-cyan/20 rounded-2xl p-6 border border-portfolio-green/30">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-portfolio-green rounded-full animate-pulse" />
                <div>
                  <h3 className="font-bold text-portfolio-green">Available for New Projects</h3>
                  <p className="text-sm text-muted-foreground">Ready to bring your ideas to life</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
