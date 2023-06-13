import ReactGA from "react-ga4";
import Profile from "../src/components/Profile/Profile";
import Experience from "../src/components/Experience/Experience";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import About from "../src/components/About/About";
import Presentation from "../src/components/Presentation/Presentation";
import Head from "next/head";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/" });

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | Home</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <Profile />
      <About />
      <Presentation />
      <Experience />
      <Footer />
    </div>
  );
}
