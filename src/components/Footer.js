import { FooterStyle } from "./styles/Footer.style";

const Footer = () => {
 const copyRightDate = () => new Date().getFullYear();

 return (
  <FooterStyle>
   <ul>
    <li>About</li>
    <li>Contact</li>
    <li>Terms</li>
    <li>Privacy</li>
    <li>Copyright {copyRightDate()}</li>
   </ul>
  </FooterStyle>
 );
};

export default Footer;
