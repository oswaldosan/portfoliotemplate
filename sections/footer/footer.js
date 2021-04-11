import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.footerGrid}>
        <div className={styles.single}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.logoBlack}></div>
              <div className={styles.logoWhite}></div>
            </div>
            Tony Sanchez Developer
            <br />
          </div>
          <p>
            Designed by Rodrigo Garcia & Coded with
            <img src="/heart.svg" alt="heart"></img>
            by Tony Sanchez
          </p>
        </div>
        <div className={styles.single}>
          <h2>Contact</h2>
          <a href="#">oswaldosan92@gmail.com</a> <br />
          <a href="#">+591 (700) 000 00</a>
          <br /> <br />
          <h2>Let's be friends</h2>
          <div className={styles.socialIcons}>
            <img src="/facebook.svg" alt="facebook social icon"></img>
            <img src="/instagram.svg" alt="instagram social icon"></img>
            <img src="/linkedin.svg" alt="LinkedIn social icon"></img>
            <img src="/skype.svg" alt="Skype social icon"></img>
            <img src="/behance.svg" alt="Behance social icon"></img>
          </div>
        </div>
        <div className={styles.single}>
          <h2>Menu</h2>
          <a href="#">Home</a> <br />
          <a href="#">Workflow</a> <br />
          <a href="#">Services</a> <br />
          <a href="#">My Work</a> <br />
          <a href="#">Resume</a> <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
