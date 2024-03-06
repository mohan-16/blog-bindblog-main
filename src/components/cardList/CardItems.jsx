import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../paginaton/Paginaton";
import Card from "../card/Card";
import Footer from "../footer/Footer";

const CardItems = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default CardItems;
