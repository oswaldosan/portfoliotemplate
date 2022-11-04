import styles from "./Estimate.module.css";

const Estimate = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedContent}>
        <div className={styles.topbg}>
          <img src="/bbg.svg" alt="bg"></img>
        </div>
        <h3>Would you like to hire me ?</h3>
        <h1>It's time to take your project to the next level</h1>
        <br />
        <p>Response time inmediatly.</p> <br />
        <br />
        <a href="https://wa.me/+50433363789">
          <div className={styles.btn}>Whatsapp Me</div>
        </a>
        <div className={styles.bottombg}>
          <img src="/bbg2.svg" width="100%" alt="bg"></img>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
