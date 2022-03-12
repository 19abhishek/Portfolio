import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Body.module.css";

function playground() {
  return (
    <>
      <Header />
      <div className={`${styles.gradientTextSmall} text-center mb-8`}>
        {" "}
        playground.
      </div>
      <div className="text-center text-2xl bold mt-8">
        this page is still under construction :(
      </div>
      <Footer />
    </>
  );
}

export default playground;
