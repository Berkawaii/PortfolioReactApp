import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaMobile,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDotnet,
  SiFlutter,
  SiSwift,
  SiFirebase,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";
import { BsKanban } from "react-icons/bs";
import "../../styles/Skills.css";

const Skills = () => {
  const { ref: skillsRef, inView } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      id: 1,
      name: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3/SCSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      id: 2,
      name: "Backend",
      icon: <SiDotnet />,
      skills: [
        { name: ".NET Core", icon: <SiDotnet /> },
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: "RESTful APIs", icon: <TbApi /> },
      ],
    },
    {
      id: 3,
      name: "Mobile",
      icon: <FaMobile />,
      skills: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Swift", icon: <SiSwift /> },
      ],
    },
    {
      id: 4,
      name: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MSSQL", icon: <FaDatabase /> },
        { name: "SQLite", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Firebase Realtime DB", icon: <SiFirebase /> },
      ],
    },
    {
      id: 5,
      name: "Other",
      icon: <SiFigma />,
      skills: [
        { name: "UI/UX Design", icon: <SiFigma /> },
        { name: "Figma/Adobe XD", icon: <SiFigma /> },
        { name: "Azure DevOps", icon: <FaMicrosoft /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Agile/Scrum", icon: <BsKanban /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="skill-category card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 30px var(--shadow)",
              }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
              </div>
              <motion.div
                className="skills-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ delay: categoryIndex * 0.1 + 0.3 }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-badge"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1 + categoryIndex * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="skill-badge-icon">{skill.icon}</div>
                    <span className="skill-badge-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Areas of Expertise</h3>
          <div className="expertise-grid">
            {[
              {
                icon: <SiFlutter size={36} />,
                title: "Mobile App Development",
                description:
                  "Cross-platform mobile apps built with Flutter and Dart for seamless user experiences",
                color: "linear-gradient(135deg, #54c5f8, #01579b)",
                iconBgStart: "#e1f5fe",
                iconBgEnd: "#80d8ff",
              },
              {
                icon: <FaReact size={36} />,
                title: "Modern Web Development",
                description:
                  "High-performance web applications using React, TypeScript, and modern JavaScript",
                color: "linear-gradient(135deg, #61dafb, #764abc)",
                iconBgStart: "#e3f2fd",
                iconBgEnd: "#bbdefb",
              },
              {
                icon: <SiDotnet size={36} />,
                title: "Backend Solutions",
                description:
                  "Robust, secure, and scalable APIs with .NET Core and C#",
                color: "linear-gradient(135deg, #512bd4, #00bcf2)",
                iconBgStart: "#e8eaf6",
                iconBgEnd: "#c5cae9",
              },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                className="expertise-item card"
                style={{
                  borderTop: `4px solid transparent`,
                  borderImageSlice: 1,
                  borderImageSource: expertise.color,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px var(--shadow)",
                }}
              >
                <motion.div
                  className="expertise-icon"
                  style={{
                    background: `linear-gradient(135deg, ${expertise.iconBgStart}, ${expertise.iconBgEnd})`,
                  }}
                  whileHover={{
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {expertise.icon}
                </motion.div>
                <h4>{expertise.title}</h4>
                <p>{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
