import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, well-documented code that stands scales." },
  { icon: Lightbulb, title: "Scalability", desc: "Designing systems that grow efficiently and handle real-world demands." },
  { icon: Rocket, title: "Reliable Systems", desc: "Building performant, well-tested services you can depend on." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Building Scalable Backend Systems
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a backend-focused software developer building scalable APIs, 
            distributed systems, and cloud-ready services. 
            I'm passionate about writing clean, maintainable code and solving complex 
            infrastructure challenges while learning modern technologies and 
            best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-lg p-8 shadow-card text-center border border-border hover:shadow-elevated transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
