import { useState } from "react";

import styles from "./NavBar.module.css";
import { getImageUrl } from "../../img";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Nel.dev
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("image/nav/closeIcon.png")
              : getImageUrl("image/nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#home"
              className={activeLink === "#home" ? styles.active : ""}
              onClick={() => handleLinkClick("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? styles.active : ""}
              onClick={() => handleLinkClick("#about")}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeLink === "#projects" ? styles.active : ""}
              onClick={() => handleLinkClick("#projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? styles.active : ""}
              onClick={() => handleLinkClick("#contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
