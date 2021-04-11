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
            <img src="/heart.svg"></img>
            by Tony Sanchez
          </p>
        </div>
        <div className={styles.single}>
          <h2>Contact</h2>
          <a>oswaldosan92@gmail.com</a> <br />
          <a>+591 (700) 000 00</a>
          <br /> <br />
          <h2>Let's be friends</h2>
          <div className={styles.socialIcons}>
            <img src="/facebook.svg"></img>
            <img src="/instagram.svg"></img>
            <img src="/linkedin.svg"></img>
            <img src="/skype.svg"></img>
            <img src="/behance.svg"></img>
          </div>
        </div>
        <div className={styles.single}>
          <h2>Menu</h2>
          <a>Home</a> <br />
          <a>Workflow</a> <br />
          <a>Services</a> <br />
          <a>My Work</a> <br />
          <a>Resume</a> <br />
        </div>
      </div>
    </div>
  );
};

export default Footer;
