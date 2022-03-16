import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Body.module.css";
import Card from "../components/Card";

function playground() {
  return (
    <>
      <Header />
      <div className={`${styles.gradientTextSmall} text-center mb-8`}>
        {" "}
        blogs.
      </div>
      <div className="text-center text-2xl bold mt-8 mb-8">
        this page is still under construction :(
      </div>
      <div className="grid grid-cols-2 place-items-center gap-8 space-between mb-14">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default playground;
