import "./App.css";

import ReactGA from "react-ga4";

import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/" });

const App = () => {
  return (
    <div className="container">
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
