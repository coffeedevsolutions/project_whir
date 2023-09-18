import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">&copy; 2023 Whir </p>
        <p className="footer-links">
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/Terms-Of-Service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;