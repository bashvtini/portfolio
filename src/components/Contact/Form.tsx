import React from "react";

import styles from "@styles/Contact/form.module.scss";

const Form: React.FC = () => {
  return (
    <form
      action="https://formspree.io/f/mrgolpgq"
      method="POST"
      className={styles.container}
    >
      <div className={styles.form_group}>
        <label className={styles.form__label}>Email address</label>
        <input type="email" name="_replyto" className={styles.form__input} />
      </div>

      <div className={styles.form_group}>
        <label className={styles.form__label}>Message</label>
        <textarea name="name" className={styles.form__input} />
      </div>

      <button type="submit" className={styles.form__submit}>
        Send message
      </button>
    </form>
  );
};

export default Form;
