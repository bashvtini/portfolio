import React from "react";

import styles from "@styles/Footer/index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.container__text}>
        © Copyright Aleksandr Hovhannisyan, 2019–Present
      </p>
    </footer>
  );
};

export default Footer;
