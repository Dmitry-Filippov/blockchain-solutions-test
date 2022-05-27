import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Филиппов Дмитрий &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
