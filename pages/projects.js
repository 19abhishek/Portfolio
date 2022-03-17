import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import styles from "../components/Body.module.css";
import Fit from "../Image/Project-Image/FIT-IN.png";
import data from "../components/Data";

function projects() {
  return (
    <>
      <Header />
      <div className={`${styles.gradientTextSmall} text-center mb-8`}>
        {" "}
        projects.
      </div>
      <div className="grid grid-cols-2 place-items-center gap-8 space-between mb-14 px-16">
        {data.map((cData) => {
          return (
            <Card
              key={cData.id}
              img={cData.src}
              text={cData.title}
              link={cData.link}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default projects;
