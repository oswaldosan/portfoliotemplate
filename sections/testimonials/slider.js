import Slider from "react-slick";
import styles from "./Testimonials.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <img src="/rightarrow.svg"></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <img src="/leftarrow.svg"></img>
    </div>
  );
}

const SliderComponent = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {props.data.map((work, i) => {
          return (
            <div className={styles.sliderGrid} key={i}>
              <div
                className={styles.images}
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <div className={styles.information}>
                <h1>{work.title}</h1>
                <p className={styles.charge}>
                  {work.charge}, <span>{work.company}</span>
                </p>
                <p>{work.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
