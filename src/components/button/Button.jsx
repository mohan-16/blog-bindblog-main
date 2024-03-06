import React from 'react'
import styles from "./button.module.css"
const Button = ({button }) => {
  return (
   <button className={styles.btn}>{button}</button>
    )
}

export default Button