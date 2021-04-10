import Header from "../components/header/header";
import HeroComponent from "../components/hero/HeroComponent";
import Services from "../components/myservices/Services";
import MyWorks from "../components/myworks/MyWorks";
import SEOcomponent from "../components/SEOComp";
import WorkFlow from "../components/workflow/WorkFlow";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <SEOcomponent
        title="Portfolio"
        description="This is My Portfolio"
        image="/portada.jpg"
      />

      <div className={styles.container}>
        <Header></Header>
        <HeroComponent></HeroComponent>
        <WorkFlow></WorkFlow>
        <Services></Services>
        <MyWorks></MyWorks>
      </div>
    </>
  );
}
