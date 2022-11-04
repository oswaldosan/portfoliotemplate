import styles from "./HeroComponent.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const HeroComponent = () => {
  return (
    <div className={styles.hero} id="hero">
      <div className={styles.info}>
        <h3>Hi, I’m</h3>
        <h1>Oswaldo Sanchez</h1>
        <h2>I build things for the web.</h2>
        <p>
          I'm a <span>Software Developer</span> based in Honduras, specializing
          in building <span>exceptional websites</span> applying the entire
          cycle of creating a digital product. In addition to being passionate
          about creating mobile and web interfaces. <br /> <br />
          Linked In Profile:{" "}
          <a
            href="https://www.linkedin.com/in/oswaldosan92/"
            rel="norefferer"
            target="_blank"
          >
            linkedin.com/in/oswaldosan92
          </a>
          <br />
          Github:{" "}
          <a
            href=" https://github.com/oswaldosan"
            rel="norefferer"
            target="_blank"
          >
            Github Profile
          </a>
        </p>
        <div className={styles.herobuttons}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <div className={styles.primarybutton}>
              Got a project? Let’s talk
            </div>
          </Link>

          <Link to="work" spy={true} smooth={true} duration={500}>
            <div className={styles.nobgbutton}>
              CHECK MY WORKS <span></span>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <h1>DEVELOPER</h1>
        <img src="/heroim.webp" alt="hero portfolio"></img>
      </div>
      <div className={styles.developerText}>DEVELOPER</div>
    </div>
  );
};

export default HeroComponent;
