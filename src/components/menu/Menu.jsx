import React from "react";
import styles from "./menu.module.css";
import MenuCategories from "./menu categories/MenuCategories";
import MenuPost from "./menupost/MenuPost";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}> {" Whats new "}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      <h2 className={styles.subtitle}> {" Discover By Topics "}</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}> {" Whats new "}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
