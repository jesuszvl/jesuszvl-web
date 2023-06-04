import ReactGA from "react-ga4";
import Head from "next/head";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/contact" });

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | Contact</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
