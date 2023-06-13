import ReactGA from "react-ga4";
import Head from "next/head";
import BlogContent from "../src/components/BlogContent/BlogContent";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

ReactGA.initialize("G-K32RW6EE92");
ReactGA.send({ hitType: "pageview", page: "/blog" });

const messages = [
  "Almost done 😪",
  "Wait for it... 🤵‍♂️",
  "I swear it worked on my computer 😅",
  "Looks like the gremlins got into the code again 😨",
  "It'll be home for Christmas 🎁",
  "This is not the blog you looking for ✨",
  "Yes! Well... Who's hungry? 🦖",
];

export default function Blog({ message }) {
  return (
    <div className="container">
      <Head>
        <title>JESUSZVL | Blog</title>
        <meta name="description" content="Software Engineer"></meta>
      </Head>
      <Navbar />
      <BlogContent message={message} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return {
    props: {
      message,
    },
  };
}
