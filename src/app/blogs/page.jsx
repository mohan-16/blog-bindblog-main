import React from "react";
import styles from "./blogPage.module.css";
import CardItems from "@/components/cardList/CardItems";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Blogs </h1>
        </div>
        <div className={styles.content}>
          <CardItems/>
          <Menu/>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
