import Estimate from "../sections/estimate/estimate";
import Footer from "../sections/footer/footer";
import Header from "../sections/header/header";
import HeroComponent from "../sections/hero/HeroComponent";
import Services from "../sections/myservices/Services";
import MyWorks from "../sections/myworks/MyWorks";
import Feed from "../sections/projectFeed/feed";
import SEOcomponent from "../sections/SEOComp";
import Testimonials from "../sections/testimonials/Testimonials";
import WorkFlow from "../sections/workflow/WorkFlow";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SEOcomponent
        title="Oswaldo Sanchez Portfolio Website"
        description="This is My Portfolio"
        image="/portada.jpg"
      />

      <div className={styles.container}>
        <Header></Header>
        <HeroComponent></HeroComponent>
        <WorkFlow></WorkFlow>
        <Services></Services>
        <MyWorks></MyWorks>
        <Estimate></Estimate>
        <Footer></Footer>
      </div>
    </>
  );
}
