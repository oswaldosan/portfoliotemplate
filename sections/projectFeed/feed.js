import styles from "./Feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedContent}>
        <h3>Would you like to appear in my project feed?</h3>
        <h1>You are one click away from making your idea a reality.</h1>
        <div className="singlebtn">let's Talk</div>
      </div>
    </div>
  );
};

export default Feed;
