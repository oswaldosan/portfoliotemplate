import Slider from "react-slick";
import styles from "./MyWorks.module.css";

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
                <p>{work.description}</p>
                {work.tech.map((tech, i) => {
                  return (
                    <div className={styles.techtag} key={i}>
                      {tech}
                    </div>
                  );
                })}
                <br /> <br />
                <br />
                <a className={styles.livelink} href={work.liveLink}>
                  SEE IT LIVE
                </a>
                <br /> <br />
                <a className={styles.codelink} href={work.liveLink}>
                  VIEW CODE
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
