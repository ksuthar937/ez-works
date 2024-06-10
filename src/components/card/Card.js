import React from "react";

import styles from "./Card.module.css";

const Card = ({ name, image, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={image} alt="design" />
        <h1>{name}</h1>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
