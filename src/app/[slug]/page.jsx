import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infocontainer}>
        <div className={styles.textcontainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            optio!
          </h1>

          <div className={styles.user}>
            <div className={styles.userImagecontainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.image1} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mohan G</span>
              <span className={styles.date}>02-03-2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imagecontainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Embark on a thrilling journey with Adventure, a blog that invites
              you to explore the unknown and discover the extraordinary. Each
              post is a gateway to new experiences, whether it's
              adrenaline-pumping escapades or serene encounters with nature. Our
              captivating tales inspire wonder and ignite your passion for
              exploration.
            </p>
            <h2>Thrilling Journeys</h2>
            <p>
              Dive into heart-pounding adventures that will leave you
              breathless. From scaling towering peaks to diving into the depths
              of the ocean, our stories will transport you to the edge of
              excitement.
            </p>
            <h2>Thrilling Journeys</h2>
            <p>
              Dive into heart-pounding adventures that will leave you
              breathless. From scaling towering peaks to diving into the depths
              of the ocean, our stories will transport you to the edge of
              excitement.
            </p>
            <h2>Thrilling Journeys</h2>
            <p>
              Dive into heart-pounding adventures that will leave you
              breathless. From scaling towering peaks to diving into the depths
              of the ocean, our stories will transport you to the edge of
              excitement.
            </p>
            <h2>Thrilling Journeys</h2>
            <p>
              Dive into heart-pounding adventures that will leave you
              breathless. From scaling towering peaks to diving into the depths
              of the ocean, our stories will transport you to the edge of
              excitement.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
