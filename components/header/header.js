import styles from "./Header.module.css";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const Header = () => {
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div
      className={styles.header}
      style={
        offset > 150
          ? { background: "#ffffffe6" }
          : { background: "transparent" }
      }
    >
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <div className={styles.logoBlack}></div>
          <div className={styles.logoWhite}></div>
        </div>
        Tony Sanchez Developer
      </div>
      <div className={styles.menu}>
        <Menu></Menu>
      </div>
      <div className={styles.mobileMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
      </div>
    </div>
  );
};

export default Header;
