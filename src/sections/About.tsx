import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text text-justify">
            Hello, I&apos;m a tech enthusiast at the crossroads of creativity and innovation. With a solid grasp of machine learning, cloud computing, and software development, I’m on a quest to push the boundaries of technology and uncover groundbreaking solutions.
          </p>
          <p className="about-grid-info-text text-justify">
            I specialize in Java, Python, and SQL, with hands-on experience in machine learning, MERN Stack, and Generative AI.
          </p>
          <p className="about-grid-info-text text-justify">
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Generative AI</li>
            <li className="about-grid-info-list-item">Azure</li>
            <li className="about-grid-info-list-item">Docker</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image
            src="/about.jpg"
            alt="Profile Picture"
            layout="responsive"  // Updated prop
            width={350}  // Set your image width
            height={350}  
            
            ></Image>


          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
