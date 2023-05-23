import styles from "../src/styles/Index.module.scss";

import ReactGA from "react-ga4";

import Profile from "../src/components/Profile/Profile";
import About from "../src/components/About/About";
import Experience from "../src/components/Experience/Experience";
import Footer from "../src/components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Index() {
  return (
    <div className="container">
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}
