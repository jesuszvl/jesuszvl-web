import ReactGA from "react-ga4";
import Head from "next/head";
import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/about" });

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | About</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
