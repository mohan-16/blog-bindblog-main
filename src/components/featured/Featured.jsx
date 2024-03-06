import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Button from "../button/Button";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Mohan here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>

          <Image src="/p1.jpeg" alt="" width={550} height={450} className={styles.image}  />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
       
            Coastal Peaks: A Quest Along the Sea and Mountains
          </h1>
          <p className={styles.postDesc}>
            Embark on an unforgettable adventure along the rugged coastlines and
            towering peaks where the sea meets the mountains. Discover hidden
            coves, majestic cliffs, and breathtaking vistas as you navigate the
            untamed beauty of this enchanting landscape. Join us as we journey
            to the edge of the world and explore the harmony of natures most
            captivating realms.
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        <Button button="Read more"/>
         </div>
      </div>
    </div>
  );
};

export default Featured;
