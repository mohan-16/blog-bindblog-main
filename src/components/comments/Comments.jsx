import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = "authentication";
  return (
    <div className={styles.container}>
      <div className={styles.commentsbox}>
        <h1 className={styles.title}>Comments</h1>
        {status == "authentication" ? (
          <div className={styles.textcontainer}>
            <textarea placeholder="write a comment"></textarea>
            <button className={styles.button}>write</button>
          </div>
        ) : (
          <Link href="/login">{"please login and write a blog"}</Link>
        )}
      </div>

      <div className={styles.comments}>
        <div className={styles.command}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}> Mohan G</span>
              <span className={styles.date}> 01-02-2024</span>
            </div>
          </div>

          <div className={styles.desc}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.command}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}> Mohan G</span>
              <span className={styles.date}> 01-02-2024</span>
            </div>
          </div>

          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              autem reiciendis cumque nisi error aliquid ut laborum consequatur
              quidem sit!
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.command}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}> Mohan G</span>
              <span className={styles.date}> 01-02-2024</span>
            </div>
          </div>

          <div className={styles.desc}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              fugit dolore laudantium ullam, odio cumque.
            </p>{" "}
          </div>
        </div>
      </div>
      <div className={styles.comments}>
        <div className={styles.command}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.image}
            />

            <div className={styles.userInfo}>
              <span className={styles.username}> Mohan G</span>
              <span className={styles.date}> 01-02-2024</span>
            </div>
          </div>

          <div className={styles.desc}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In culpa
              laborum aliquam, neque praesentium voluptate architecto.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
