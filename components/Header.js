import React, { useEffect, useState } from "react";
import Image from "next/image";
import abhishekLogo from "../images/abhishek-logo2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  // if (!mounted) return null;
  // console.log("Current theme is ", theme);

  return (
    <div className="p-4 flex items-center justify-between">
      <div className="cursor-pointer">
        <Link href="/">
          <Image src={abhishekLogo} height={120} width={120} />
        </Link>
      </div>
      <div className="dark:text-white flex items-center space-x-3">
        <div className="headerText opacity-90">
          <Link href="/">home.</Link>
        </div>

        <div className="headerText opacity-90">
          <Link href="/projects">projects.</Link>
        </div>
        <div className="headerText opacity-90">
          <Link href="/playground">playground.</Link>
        </div>
        <div className="headerText opacity-90">
          <a
            href="https://drive.google.com/file/d/1QDigTza5VdUg-p-VaFu6xX2O6XxRMaFv/view"
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
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-3b7376187/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
              resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="absolute left-0 flex items-center justify-center">
              <LightModeIcon className="!w-[20px] !h-[20px]" />
            </span>
            <motion.div
              className="w-5 h-5 bg-white rounded-full z-40"
              layout
              transition={spring}
            />

            <span className="absolute right-0.5 flex items-center justify-center">
              <DarkModeIcon className="!w-[20px] !h-[20px]" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
