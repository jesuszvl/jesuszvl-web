import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const links = [{ name: "About", href: "/about" }];

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-menu"]}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles["dropdown-menu-link"]}
            onClick={() => {
              setIsMenuActive(!isMenuActive);
            }}
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
          {links.map((link) => (
            <Link key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          className={styles["menu-icon"]}
          onClick={() => {
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
