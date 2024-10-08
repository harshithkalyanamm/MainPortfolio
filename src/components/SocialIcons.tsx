import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/harshithkalyanamm" },
    { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/kalyanam-harshith-86405a204/" },
    { name: "Instagram", icon: <FiInstagram />, link: "https://www.instagram.com/kalyanamharshith/" },
  ];

  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
