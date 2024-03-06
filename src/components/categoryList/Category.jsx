import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.cattitle}>Popular Categories</h1>

        <div className={styles.categories}>
          <Link href="/" className={`${styles.category} ${styles.style}`}>
            <Image
              src="/style.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            Style
          </Link>
          <Link href="/" className={`${styles.category} ${styles.food}`}>
            <Image
              src="/food.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            Food
          </Link>
          <Link href="/" className={`${styles.category} ${styles.fashion}`}>
            <Image
              src="/fashion.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            Fashion
          </Link>
          <Link href="/" className={`${styles.category} ${styles.travel}`}>
            <Image
              src="/travel.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            Travel
          </Link>
          <Link href="/" className={`${styles.category} ${styles.culture}`}>
            <Image
              src="/culture.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            Culture
          </Link>{" "}
          <Link href="/" className={`${styles.category} ${styles.coding}`}>
            <Image
              src="/coding.png"
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />{" "}
            coding{" "}
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Category;
