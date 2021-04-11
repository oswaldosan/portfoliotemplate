import styles from "./Services.module.css";
import servicesdata from "./servicesdata";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <h3>My Services</h3>
      <h1>I Can Help you in this</h1>
      <div className={styles.serviceGrid}>
        {servicesdata.map((service, i) => {
          return (
            <div className={styles.singleService} key={i}>
              <img src={service.icon} width="40px" alt={service.title}></img>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              {service.tags.map((tag, i) => {
                return (
                  <div className={styles.singletag} key={i}>
                    {tag}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
