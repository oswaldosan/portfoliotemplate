import links from "./menuLinks";
import styles from "./Header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const Menu = (props) => {
  const [selected, setSelected] = useState("hero");

  function setMenu(link) {
    setSelected(link);
    console.log(link);
    props.openMenu();
  }

  return (
    <div className={styles.main}>
      <ul>
        {links.map((item, i) => {
          return (
            <li
              key={i}
              style={
                selected === item.link
                  ? { color: "#260CBC" }
                  : { color: "black" }
              }
            >
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                offset={item.link === "hero" ? -150 : 0}
                duration={500}
                onClick={() => {
                  setMenu(item.link);
                }}
              >
                {item.title}
              </Link>
              {selected === item.link ? (
                <div className={styles.mark}></div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
