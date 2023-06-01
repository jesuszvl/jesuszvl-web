import ReactGA from "react-ga4";

import Profile from "../src/components/Profile/Profile";
import About from "../src/components/About/About";
import Experience from "../src/components/Experience/Experience";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Index() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}
