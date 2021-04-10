import styles from "./MyWorks.module.css";
import SliderComponent from "./slider";
import worksdata from "./workdata";

const MyWorks = () => {
  return (
    <div className={styles.works} id="work">
      <h3>My Selected Works</h3>
      <h1>Projects Wich I have created</h1>

      <div>
        <SliderComponent data={worksdata}></SliderComponent>
      </div>
    </div>
  );
};

export default MyWorks;
