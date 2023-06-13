import ReactGA from "react-ga4";
import Head from "next/head";
import BlogContent from "../src/components/BlogContent/BlogContent";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/blog" });

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | Blog</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <BlogContent />
      <Footer />
    </div>
  );
}
