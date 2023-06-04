import ReactGA from "react-ga4";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import MenuIcon from "../../icons/MenuIcon";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
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

  return (
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
        onClick={() => trackLinkClick("Menu")}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
