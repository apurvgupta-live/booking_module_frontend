import React from "react";
import styles from "./info-card-styles.module.scss";
import "./info-card.css";
const InfoCard = ({ data }) => {
  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.title_container}>{data.title}</h3>
      </div>
      <div className={`${styles.card_container} scroll-card-modified-bar`}>
        {data?.list?.map((item) => (
          <div className={styles.card}>
            <h4>{item}</h4>
            <input
              type="text"
              className={styles.demoCard}
              placeholder="Enter Details"
            />
            {/* <div className={styles.demoCard}>
              <input type="text" className={styles.demoCard} />
            </div> */}
          </div>
        ))}
      </div>
      {/* <div className={`${styles.card_container} scroll-card-modified-bar`}>
        {data?.list?.map((item) => (
          <div className={styles.card}>
            <h4>{item}</h4>
            <div className={styles.demoCard}></div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default InfoCard;
