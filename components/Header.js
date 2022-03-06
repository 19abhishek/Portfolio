import React from "react";
import Image from "next/image";
import abhishekLogo from "../images/abhishek-logo2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function Header() {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="">
        <Image src={abhishekLogo} height={120} width={120} />
      </div>
      <div className="text-white flex items-center space-x-3">
        <div>playground.</div>
        <div>
          <a href="https://github.com/19abhishek">about.</a>
        </div>
        <div>projects.</div>
        <div>
          <a
            href="https://drive.google.com/file/d/1WfNwUXv9G5clRh91lslOaO0dTDK6PStw/view"
            target="_blank"
          >
            resume.
          </a>
        </div>
        <div>
          <a href="https://github.com/19abhishek" target="_blank">
            <GitHubIcon />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/abhishek_0819" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
