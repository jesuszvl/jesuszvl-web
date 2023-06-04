import Image from "next/image";
import styles from "./About.module.scss";

import javascript from "./javascript.svg";
import python from "./python.svg";
import react from "./react.svg";
import node from "./node.svg";
import typescript from "./typescript.svg";
import django from "./django.svg";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about"]}>
        <h1>About Me</h1>
        <p>
          +12 years experience as a software engineer. Track record building
          high-performing web applications and creating innovative
          customer-centered products that exceed business needs.
        </p>
        <p>
          Proactive and Lean mindset backed by my experience in established
          organizations, national companies and startups in hyper-growth stages.
        </p>
        <br />
        <h1>Engineering</h1>
        <p>
          When it comes to building JavaScript applications, I&apos;ve got the
          tools that make the magic happen. But hey, I&apos;m not dependent on
          them—I can roll up my sleeves and deliver blazing-fast solutions that
          can handle anything, no matter the scale.{" "}
        </p>
        <p>
          Performance and scalability? Yeah, those are definitely high on my
          list of priorities. I&apos;ll make sure your app runs like a
          well-oiled machine, ticking all the boxes for speed and resilience
        </p>

        <div className={styles["techstack"]}>
          <Image src={react} height={48} alt={"React"} />
          <Image src={node} height={48} alt={"Node"} />
          <Image src={typescript} height={48} alt={"Typescript"} />
          <Image src={javascript} height={48} alt={"Javascript"} />
        </div>

        <div className={styles["techstack"]}>
          <Image src={django} height={48} alt={"Django"} />
          <Image src={python} height={48} alt={"Python"} />
        </div>

        <br />

        <h1>Design</h1>
        <p>
          I&apos;m definitely not your average designer, hunched over an
          Illustrator artboard, obsessing over every pixel. Nah, that&apos;s not
          my style. You&apos;ll find me deep in the realm of stylesheets,
          tinkering with font sizes and playing around with layouts.
        </p>
        <p>
          My mission is to create user experiences that feel like a breeze,
          while also looking super fly. I&apos;m all about making things smooth
          and trendy, so you can bet I&apos;ll bring some serious style to the
          table.
        </p>
      </div>
    </div>
  );
}
