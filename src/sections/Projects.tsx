import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/apple.jpg",
      projectName: "Apple Website",
      projectLink: "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      projectDescription:
        "Engineered a cutting-edge 3D website for Apple, featuring detailed product visuals and interactive elements. Leveraged GSAP and Three.js to create a dynamic and immersive experience, allowing users to explore Apple’s product range in a virtual 3D space. Integrated smooth animations and responsive design to ensure an engaging and seamless user experience across all devices.",
      projectTech: ["Next.Js", "GSAP", "Three.Js", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/harshithkalyanamm",
        externalLink: "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      },
    },
    {
      image: "/flowinance.png",
      projectName: "Flowinance - Finance Tracker",
      projectLink: "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      projectDescription:
        "Developed a sophisticated budget tracking application aimed at helping users manage their finances effectively. Built with TypeScript and Supabase, the app provides real-time financial tracking, detailed expense categorization, and intuitive budget planning tools. Designed with a user-friendly interface to simplify financial management and offer actionable insights into spending habits and savings goals.",
      projectTech: ["Typescript", "React", "TailwindCSS", "PostgreSQL"],
      projectExternalLinks: {
        github: "https://github.com/harshithkalyanamm",
        externalLink:
          "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      },
    },
    {
      image: "/code.png",
      projectName: "Compile Vortex",
      projectLink: "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      projectDescription:
        "A web-based code editor that allows you to compile and run your code in over 40 programming languages. You can also customize your coding environment by choosing from a selection of available themes.",
      projectTech: ["React", "Node.js", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/harshithkalyanamm",
        externalLink: "https://github.com/harshithkalyanamm/Harshithtechportfolio",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill loading="lazy" alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p style={{ textAlign: "justify" }}>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
