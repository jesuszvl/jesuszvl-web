import { useState } from "react";
import ReactGA from "react-ga4";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MenuIcon from "../../icons/MenuIcon";
import { render } from "@testing-library/react";
import CloseIcon from "../../icons/CloseIcon";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const links = [
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const trackLinkClick = (linkName) => {
    ReactGA.initialize("G-K32RW6EE92");
    ReactGA.event({
      category: "Navbar",
      action: `Clicked ${linkName} link`,
    });
  };

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-menu"]}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles["dropdown-menu-link"]}
            onClick={() => trackLinkClick(link.name)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <span className={styles.company}>
            JESUS<span className={styles.sign}>ZVL</span>
          </span>
        </Link>

        <div className={styles.menu}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={styles.link}
              onClick={() => trackLinkClick(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={styles["menu-icon"]}
          onClick={() => {
            trackLinkClick("Menu");
            setIsMenuActive(!isMenuActive);
          }}
        >
          {!isMenuActive ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
      {isMenuActive && renderDropdownMenu()}
    </>
  );
};

export default Navbar;
