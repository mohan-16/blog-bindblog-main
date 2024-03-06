import React from 'react'
import styles from './paginaton.module.css'
import Button from '../button/Button'

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Previous</button>
      <button className={styles.btn}>Next</button>

    </div>
  )
}

export default Pagination