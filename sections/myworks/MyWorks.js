import styles from "./MyWorks.module.css";
import SliderComponent from "./slider";
import worksdata from "./workdata";

const MyWorks = () => {
  return (
    <div className={styles.works} id="work">
      <h3>My Selected Works</h3>
      <h1>Some projects I can share with you:</h1>

      <div>
        <SliderComponent data={worksdata}></SliderComponent>
      </div>
    </div>
  );
};

export default MyWorks;
