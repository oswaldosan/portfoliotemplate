import styles from "./WorkFlow.module.css";
import steps from "./steps";

const WorkFlow = () => {
  return (
    <div className={styles.workflow} id="workflow">
      <h3>How I Work</h3>
      <h1>Workflow Process</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>

      <div className={styles.steps}>
        {steps.map((step, i) => {
          return (
            <div className={styles.singleStep} key={i}>
              <div className={styles.number}>{step.number}</div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkFlow;
