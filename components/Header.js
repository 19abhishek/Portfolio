import React from "react";
import Image from "next/image";
import abhishekLogo from "../images/abhishek-logo2.png";

function Header() {
  return (
    <div className="p-4">
      <div className="">
        <Image src={abhishekLogo} height={120} width={120} />
      </div>
      <div></div>
    </div>
  );
}

export default Header;
