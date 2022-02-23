import React from 'react';
import footerYear from '../images/Site/logo_year.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={footerYear} alt="2021" />
      </footer>
    ) 
  }
}

export default Footer;
