import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    org: "DevHacks 2023",
    detail: "1st place for building an AI-powered accessibility auditor in 48 hours.",
  },
  {
    icon: BadgeCheck,
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    detail: "Professional-level certification for designing distributed systems on AWS.",
  },
  {
    icon: Award,
    title: "Google UX Design Certificate",
    org: "Google / Coursera",
    detail: "Completed the full UX design professional certificate programme.",
  },
  {
    icon: BadgeCheck,
    title: "Meta Front-End Developer",
    org: "Meta / Coursera",
    detail: "Professional certificate covering React, testing, and modern front-end practices.",
  },
  {
    icon: Trophy,
    title: "Open-Source Impact Award",
    org: "React Community",
    detail: "Recognised for sustained contributions improving component accessibility.",
  },
  {
    icon: Award,
    title: "Speaker – React Conf 2023",
    org: "React Conf",
    detail: "Delivered a talk on scalable design-system architecture to 500+ attendees.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Achievements & Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-elevated transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-xs font-mono text-primary mb-2">{item.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
