import React from "react";

import Form from "./Form";

import styles from "@styles/Contact/index.module.scss";

const Contact: React.FC = () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.container__title}>Get in touch! 📧</h1>
      <p className={styles.container__desc}>
        Fields marked with an asterisk are required.
      </p>

      <div className={styles.container__content}>
        <Form />
      </div>
    </article>
  );
};

export default Contact;
