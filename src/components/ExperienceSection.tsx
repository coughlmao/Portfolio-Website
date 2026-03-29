import { motion } from "framer-motion";
import { Briefcase, MapPin, Users } from "lucide-react";

const experiences = [
  {
    role: "Software Developer",
    company: "Fincyn",
    location: "London, UK (Remote)",
    period: "Jan 2025 – Jun 2025",
    type: "work" as const,
    points: [
      "Automated 300+ monthly Gmail submissions with a NestJS scraper, saving ~6 hours/week.",
      "Built a regex + ML file parser handling 500+ docs/month with PDF conversion.",
      "Added Geolocation + Leaflet tracking, improving address capture completeness by 18%.",
    ],
  },
  // {
  //   role: "Open-Source Contributor",
  //   company: "React Ecosystem",
  //   location: "Remote",
  //   period: "2019 – Present",
  //   type: "collab" as const,
  //   points: [
  //     "Contributed accessibility improvements to popular component libraries.",
  //     "Collaborated with maintainers on performance-critical PRs.",
  //   ],
  // },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <span
                className={`absolute top-1 left-2.5 md:left-auto w-3 h-3 rounded-full border-2 border-primary bg-background ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                }`}
              />

              <div className="bg-card border border-border rounded-lg p-5 shadow-card hover:shadow-elevated transition-shadow">
                <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.type === "collab" ? (
                    <Users className="h-4 w-4 text-primary flex-shrink-0" />
                  ) : (
                    <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
                  )}
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary mb-1">{exp.company}</p>
                <p className={`flex items-center gap-1 text-xs text-muted-foreground mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </p>
                <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      className={`leading-relaxed flex items-start gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 ${
                          i % 2 === 0 ? "md:order-2" : ""
                        }`}
                      />
                      <span className={i % 2 === 0 ? "md:order-1" : ""}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
