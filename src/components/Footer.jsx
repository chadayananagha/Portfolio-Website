import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Copyright */}
        <p className="text-sm text-gray-800">
          &copy; 2025 Anagha Chadayan. All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/chadayananagha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-800 hover:text-primary transition-colors duration-300"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/anagha-chadayan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-800 hover:text-primary transition-colors duration-300"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="mailto:anagha.chadayan@gmail.com"
            aria-label="Email"
            className="text-gray-800 hover:text-primary transition-colors duration-300"
          >
            <i className="fas fa-envelope fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
