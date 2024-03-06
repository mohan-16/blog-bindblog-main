import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPost.module.css";


const MenuPost = ({withImage}) => {
  return (
    <>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
           {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Travel</span>
            <h3 className={styles.posttitle}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
           {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
           {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              coding
            </span>
            <h3 className={styles.posttitle}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
           {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.details}>
              <span className={styles.username}> Mohan G </span>
              <span className={styles.date}>02.03.24</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPost;
