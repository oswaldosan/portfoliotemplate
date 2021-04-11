import styles from "./Header.module.css";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import links from "./menuLinks";

const Header = () => {
  const [offset, setOffset] = useState(null);
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  function openMenu() {
    setOpen(!opened);
    console.log(opened);
  }

  return (
    <>
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
          <Menu openMenu={openMenu}></Menu>
        </div>
        <div className={styles.mobileMenu} onClick={openMenu}>
          <div className={styles.bar1}></div>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
        </div>
      </div>
      {opened ? (
        <div className={styles.mobileBigMenu}>
          <div className={styles.closeBtn} onClick={openMenu}>
            X
          </div>
          <Menu openMenu={openMenu}></Menu>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
