"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor} onClick={() => setOpen(!open)}>
        <button className={styles.button}>
          <Image src="/plus.png" width={17} height={17} alt="" />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={17} height={17} alt="" />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={17} height={17} alt="" />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={17} height={17} alt="" />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Just Blog your story...!!"
        />
      </div>
      <button className={styles.publish}>Publish</button>{" "}
    </div>
  );
};

export default WritePage;
