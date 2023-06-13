import Image from "next/image";
import styles from "./About.module.scss";

import javascript from "./javascript.svg";
import python from "./python.svg";
import react from "./react.svg";
import node from "./node.svg";
import typescript from "./typescript.svg";
import django from "./django.svg";
import css from "./css.svg";
import figma from "./figma.svg";
import photoshop from "./photoshop.svg";
import next from "./next.svg";
import ruby from "./ruby.svg";
import php from "./php.svg";
import java from "./java.svg";
import SectionContainer from "../SectionContainer/SectionContainer";

export default function About() {
  return (
    <SectionContainer>
      <div className={styles["about"]}>
        <h1>What I&apos;m good for?</h1>
        <h2 className={styles["section-title"]}>Frontend</h2>
        <p>
          When it comes to building JavaScript applications, I&apos;ve got the
          tools that make the magic happen. But hey, I&apos;m not dependent on
          them—I can roll up my sleeves and deliver blazing-fast solutions that
          can handle anything, no matter the scale.
        </p>
        <div className={styles["techstack"]}>
          <Image src={next} height={48} alt={"Next"} />
          <Image src={react} height={48} alt={"React"} />
          <Image src={node} height={48} alt={"Node"} />
          <Image src={typescript} height={48} alt={"Typescript"} />
          <Image src={javascript} height={48} alt={"Javascript"} />
        </div>
        <h2 className={styles["section-title"]}>Backend</h2>
        <p>
          Performance and scalability? Yeah, those are definitely high on my
          list of priorities. I&apos;ll make sure your app runs like a
          well-oiled machine, ticking all the boxes for speed and resilience.
        </p>
        <div className={styles["techstack"]}>
          <Image src={django} height={48} alt={"Django"} />
          <Image src={python} height={48} alt={"Python"} />
          <Image src={ruby} height={48} alt={"Ruby"} />
          <Image src={php} height={48} alt={"PHP"} />
          <Image src={java} height={48} alt={"Java"} />
        </div>
        <h2 className={styles["section-title"]}>Design</h2>
        <p className={styles["subtitle"]}>
          I&apos;m definitely not your average designer, hunched over an
          Illustrator artboard, obsessing over every pixel. Nah, that&apos;s not
          my style. You&apos;ll find me deep in the realm of stylesheets,
          tinkering with font sizes and playing around with layouts.{" "}
        </p>
        <p className={styles["subtitle"]}>
          My mission is to create user experiences that feel like a breeze,
          while also looking super fly. I&apos;m all about making things smooth
          and trendy, so you can bet I&apos;ll bring some serious style to the
          table.
        </p>
        <div className={styles["techstack"]}>
          <Image src={css} height={48} alt={"CSS"} />
          <Image src={photoshop} height={48} alt={"Photoshop"} />
          <Image src={figma} height={48} alt={"Figma"} />
        </div>
      </div>
    </SectionContainer>
  );
}
