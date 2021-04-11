import styles from "./Estimate.module.css";

const Estimate = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedContent}>
        <div className={styles.topbg}>
          <img src="/bbg.svg"></img>
        </div>
        <h3>Would you like to appear in my project feed?</h3>
        <h1>It's time to take your project to the next level</h1>
        <br />
        <p>Response time 1 to 2 working days.</p> <br />
        <br />
        <div className={styles.btn}>Estimate project</div>
        <div className={styles.bottombg}>
          <img src="/bbg2.svg" width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default Estimate;
