import styles from "./Testimonials.module.css";
import SliderComponent from "./slider";
import worksdata from "./testdata";

const Testimonials = () => {
  return (
    <div className={styles.works} id="testimonials">
      <h3>Testimonials</h3>
      <h1>
        Words from clients who decided to give their business a new direction
      </h1>

      <div>
        <SliderComponent data={worksdata}></SliderComponent>
      </div>
    </div>
  );
};

export default Testimonials;
