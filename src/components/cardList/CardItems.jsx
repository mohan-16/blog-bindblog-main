import React from "react";
import styles from "./cardlist.module.css";
import Pagination from "../paginaton/Paginaton";
import Card from "../card/Card";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardItems = async ({ page}) => {
  const { posts, count } = await getData(page);

  const Post_PerPage = 3;

  const hasPrev = Post_PerPage * (page - 1) > 0;
  const hasNext = Post_PerPage * (page - 1) + Post_PerPage < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};


export default CardItems;
