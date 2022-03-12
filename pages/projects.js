import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import styles from "../components/Body.module.css";

function projects() {
  return (
    <>
      <Header />
      <div className={`${styles.gradientTextSmall} text-center mb-8`}>
        {" "}
        projects.
      </div>
      <div className="grid grid-cols-2 place-items-center gap-8 space-between mb-14">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default projects;
