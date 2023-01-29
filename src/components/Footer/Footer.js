import React from "react";
import "./footer.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://instagram.com/huseyindiyaroglu" target="_blank">
          <FiInstagram></FiInstagram>
        </a>
        <a href="https://twitter.com/huseyineva" target="_blank">
          <FaTwitter></FaTwitter>
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%BCseyin-diyaro%C4%9Flu-703688231/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/huseyineva" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
