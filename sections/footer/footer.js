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
            Coded with
            <img src="/heart.svg" alt="heart"></img>
            by Oswaldo Sanchez
          </p>
        </div>
        <div className={styles.single}>
          <h2>Contact</h2>
          <a href="mailto:oswaldosan92@gmail.com">
            oswaldosan92@gmail.com
          </a>{" "}
          <br />
          <a href="#">+504 3336-3789</a>
          <br /> <br />
          <h2>Let's be friends</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/tonyloops" target="_blank">
              <img src="/facebook.svg" alt="facebook social icon"></img>
            </a>
            <a href="https://www.instagram.com/tonyloops/" target="_blank">
              <img src="/instagram.svg" alt="instagram social icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/oswaldosan92" target="_blank">
              <img src="/linkedin.svg" alt="LinkedIn social icon"></img>
            </a>
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
