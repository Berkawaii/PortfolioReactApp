import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "../../styles/Experience.css";

const Experience = () => {
  const { ref: expRef, inView } = useScrollAnimation(0.1);

  const experiences = [
    {
      id: 1,
      role: "Software Developer @ Düzey",
      period: "January 2023 – Present",
      description:
        "Developed B2B and SFA mobile applications for Düzey using NopCommerce, .NET Core, React, and Flutter. Reduced paperwork by 75% with UniCoWallet, a digital wallet and expense management app. Built a real-time fleet tracking system and an AI-powered smart route prediction tool (DDR).",
      tasks: [
        "Developed B2B and SFA mobile apps using NopCommerce, .NetCore,React and Flutter, significantly improving field operations",
        "Built digital wallet and expense management app (UniCoWallet) reducing paperwork by 75%.",
        "Designed and launched a fleet tracking system for real-time vehicle monitoring.",
        "Engineered DDR (Dynamic Delivery Routing), a smart route prediction system that optimized shipment paths and reduced vehicle usage by 50%.",
        "Worked on both frontend and backend tasks, integrating .NET-based services and REST APIs.",
        "Led UI/UX efforts for multiple projects with a focus on mobile responsiveness and usability.",
      ],
      tech: ["React", ".NET Core", "C#", "Flutter", "RESTful APIs"],
    },
    {
      id: 2,
      role: "Jr. Developer @ Düzey",
      period: "September 2021 - December 2022",
      description:
        "Analyzed SAP ERP and SFA processes to enhance operational efficiency. Improved team performance metrics by 40% through strategic process optimizations.",
      tasks: [
        "Demonstrated expertise in process optimization and improvement by analyzing and redesigning SAP ERP and SFA processes. ",
        "Applied data-driven insights to identify areas for improvement and implement sustainable solutions.",
        "Conducted thorough assessments of operational processes, pinpointing areas for enhancement; introduced targeted strategies that boosted team performance metrics by 40% and improved service delivery timelines. ",
      ],
      tech: ["SAP", "Process Optimization"],
    },
    {
      id: 3,
      role: "Intern Developer @ Başarsoft",
      period: "June 2021 - September 2021",
      description:
        "Developed custom map applications focusing on interactive features and geospatial data visualization.",
      tasks: [
        "Collaborated with senior developers to enhance application performance and user experience.",
      ],
      tech: ["JavaScript", "OpenLayers"],
    },
  ];

  return (
    <section id="experience" className="experience-section" ref={expRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : index % 2 === 0 ? -50 : 50,
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-content card"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 15px 30px var(--shadow)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3>{exp.role}</h3>
                <div className="timeline-period">{exp.period}</div>
                <p>{exp.description}</p>
                <div className="timeline-details">
                  <ul>
                    {exp.tasks.map((task, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: inView ? 1 : 0,
                          x: inView ? 0 : -20,
                        }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      >
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="tech-tags">
                  {exp.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: inView ? 1 : 0,
                        scale: inView ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
