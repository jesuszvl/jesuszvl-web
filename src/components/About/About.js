import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about"]}>
        <h1>Engineering</h1>
        <p>
          When it comes to building JavaScript applications, I've got the tools
          that make the magic happen. But hey, I'm not dependent on them—I can
          roll up my sleeves and deliver blazing-fast solutions that can handle
          anything, no matter the scale.{" "}
        </p>
        <p>
          Performance and scalability? Yeah, those are definitely high on my
          list of priorities. I'll make sure your app runs like a well-oiled
          machine, ticking all the boxes for speed and resilience
        </p>

        <h1>Design</h1>
        <p>
          I'm definitely not your average designer, hunched over an Illustrator
          artboard, obsessing over every pixel. Nah, that's not my style. You'll
          find me deep in the realm of stylesheets, tinkering with font sizes
          and playing around with layouts.
        </p>
        <p>
          My mission is to create user experiences that feel like a breeze,
          while also looking super fly. I'm all about making things smooth and
          trendy, so you can bet I'll bring some serious style to the table.
        </p>
      </div>
    </div>
  );
}
