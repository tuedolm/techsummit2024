import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-neutral-100">Tech Summit 2024</h3>
            <p>© 2024 Tech Summit. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/events/techsummit2024byvietsparkandvie7219185468997824512/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.facebook.com/events/1282940509347909" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
