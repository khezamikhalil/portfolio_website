import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Khalil Khezami</h1>
        <p className={styles.description}>
        I'm a developer and Master's student in Enterprise Systems Engineering at ISG Tunis, with a strong foundation in problem analysis and solution design. Reach out if you'd like to learn more!        </p>
        <a href="mailto:Khalil.Khezamii@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        //src={getImageUrl("hero/heroImage.png")}
        //src={getImageUrl("kh.png")}
        src={getImageUrl("A.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
