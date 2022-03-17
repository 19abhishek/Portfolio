import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Body.module.css";
import Card from "../components/Card";
import BlogCard from "../components/BlogCard";

function playground() {
  return (
    <>
      <Header />
      <div className={`${styles.gradientTextSmall} text-center mb-8`}>
        {" "}
        blogs.
      </div>
      {/* <div className="text-center text-2xl bold mt-8 mb-8">
        this page is still under construction :(
      </div> */}
      <div className="grid place-items-center gap-8 space-between mb-14">
        <a
          href="https://abhishek19.hashnode.dev/call-apply-and-bind-in-javascript"
          target="_blank"
        >
          <BlogCard text={"Understanding call, apply and bind in JS"} />
        </a>
        <a href="https://abhishek19.hashnode.dev/hooks-and-rules-of-hooks">
          <BlogCard text={"Hooks and rules of hooks"} />
        </a>
        <a href="https://abhishek19.hashnode.dev/redux-and-redux-toolkit-simply-explained">
          <BlogCard text={"Redux and Redux toolkit - simply explained."} />
        </a>
      </div>
      <Footer />
    </>
  );
}

export default playground;
