import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "../../styles/About.css";

const About = () => {
  const { ref: aboutRef, inView } = useScrollAnimation(0.1);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content grid-cols-2">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.p
              className="about-intro"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              I’m a versatile <strong>fullstack developer</strong> with over 4
              years of experience building comprehensive, user-centered, and
              scalable applications.
            </motion.p>
            <motion.p variants={fadeIn} transition={{ duration: 0.5 }}>
              I have proven skills in delivering end-to-end solutions—from
              frontend UI/UX to backend API integration. I specialize in
              optimizing processes, collaborating with cross-functional teams,
              and continuously improving code quality.
            </motion.p>
          </motion.div>

          <div className="about-stats">
            {[
              { number: "4+", text: "Years of Experience" },
              { number: "10+", text: "Completed Projects" },
              { number: "3", text: "Areas of Expertise" },
              { number: "40%", text: "Performance Improvement" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 30,
                }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px var(--shadow)",
                  borderColor: "var(--primary)",
                }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
