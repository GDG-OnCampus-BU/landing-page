// components/Footer.js
import React from "react";
import Image from "next/image";
import footerImage from "../assets/realist-footer.png"
import Logo from "./Logo";
import SocialHandles from "../Commons/SocialHandles/index";
import { Link } from 'react-scroll'
import '../styles/footer.css';

const Footer = ({footer}) => {
  return (
    <footer id='footer'>
  <div className="footer-bottom-row">
    <div className="footer-hello">
      <div className="footer-column">
        <Logo />
        <div className="footer-image">
          <Image src={footerImage} alt="Footer Image" layout="responsive" />
        </div>
        <SocialHandles />
      </div>
      {footer.map((list, index) => (
        <div className="footer-column" key={index}>
          <h3 className="footer-muted footer-title">{list.title}</h3>
          {list.routes.map((route, i) => (
            <Link
              to={route.id || ''}
              smooth={true}
              className="footer-route"
              key={i}
            >
              {route.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
    <div className="footer-copyright">
      <h4>Copyright &copy; All rights reserved - 2024</h4>
      <p className="footer-muted">Built with love by Devanshi Jaiswal</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
