import ReactGA from "react-ga4";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Presentation from "../src/components/Presentation/Presentation";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/portfolio" });

export default function Portfolio() {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | Portfolio</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <Presentation />
      <Footer />
    </div>
  );
}
