import Image from "next/image";
import styles from "./About.module.scss";
import { SVG_LIBRARY } from "../../icons/library";
import SectionContainer from "../SectionContainer/SectionContainer";

const sections = [
  {
    title: "Frontend",
    content:
      "When it comes to building JavaScript applications, I've got the tools that make the magic happen. But hey, I'm not dependent on them, I can roll up my sleeves and deliver blazing-fast solutions that can handle anything, no matter the scale.",
    images: [
      { name: "Next", src: SVG_LIBRARY.NEXT },
      { name: "React", src: SVG_LIBRARY.REACT },
      { name: "Node", src: SVG_LIBRARY.NODE },
      { name: "TypeScript", src: SVG_LIBRARY.TS },
      { name: "JavaScript", src: SVG_LIBRARY.JS },
    ],
  },
  {
    title: "Backend",
    content:
      "Performance and scalability? Yeah, those are definitely high on my list of priorities. I'll make sure your app runs like a well-oiled machine, ticking all the boxes for speed and resilience.",
    images: [
      { name: "Django", src: SVG_LIBRARY.DJANGO },
      { name: "Python", src: SVG_LIBRARY.PYTHON },
      { name: "Ruby", src: SVG_LIBRARY.RUBY },
      { name: "PHP", src: SVG_LIBRARY.PHP },
      { name: "Java", src: SVG_LIBRARY.JAVA },
    ],
  },
  {
    title: "Design",
    content:
      "I'm definitely not your average designer, hunched over an Illustrator artboard, obsessing over every pixel. Nah, that's not my style. You'll find me deep in the realm of stylesheets, tinkering with font sizes and playing around with layouts. My mission is to create user experiences that feel like a breeze, while also looking super fly. I'm all about making things smooth and trendy, so you can bet I'll bring some serious style to the table.",
    images: [
      { name: "CSS", src: SVG_LIBRARY.CSS },
      { name: "Photoshop", src: SVG_LIBRARY.PS },
      { name: "Figma", src: SVG_LIBRARY.FIGMA },
    ],
  },
];

export default function About() {
  const renderAboutSection = ({ title, content, images }) => {
    return (
      <div className={styles["section-container"]} key={title}>
        <span className={styles["section-title"]}>{title}</span>
        <div className={styles["techstack"]}>
          {images.map((image) => {
            return (
              <Image
                key={image.name}
                src={image.src}
                height={38}
                alt={image.name}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <SectionContainer>
      <div className={styles["about"]}>
        <h1 className={styles["about-title"]}>Skills</h1>
        <div className={styles["sections-container"]}>
          {sections.map((section) => {
            return renderAboutSection(section);
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
