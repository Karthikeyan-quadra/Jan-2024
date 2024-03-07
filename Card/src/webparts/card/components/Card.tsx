import * as React from 'react';
import styles from './Card.module.scss';

export default function Card(){
  return(
  <div className={styles.Container}>
    {/* Completed Card */}
    <div className={styles.Completed_Card}>
      <div className={styles.Completed_margin}>
      <p className={styles.Completed_border}></p>
      <p className={styles.Completed_box}>25</p>
      <p className={styles.Completed_text}>Completed</p>
      </div>
    </div>

    {/* Rejected Card */}
    <div className={styles.Rejected_Card}>
      <div className={styles.Rejected_margin}>
      <p className={styles.Rejected_border}></p>
      <p className={styles.Rejected_box}>05</p>
      <p className={styles.Rejected_text}>Rejected</p>
      </div>
    </div>

    {/* Pending Card */}
    <div className={styles.Pending_Card}>
      <div className={styles.Pending_margin}>
      <p className={styles.Pending_border}></p>
      <p className={styles.Pending_box}>05</p>
      <p className={styles.Pending_text}>Pending</p>
      </div>
    </div>

    {/* Total Card */}
    <div className={styles.Total_Card}>
      <div className={styles.Total_margin}>
      <p className={styles.Total_border}></p>
      <p className={styles.Total_box}>37</p>
      <p className={styles.Total_text}>Total</p>
      </div>
    </div>
  </div>
  )
}