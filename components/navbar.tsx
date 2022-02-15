import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link as ReactScrollLink } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const [mainNavVisible, setVisibility] = useState(true);
  const [navOpaque, setNavOpaque] = useState(false);
  const [mobMenuVisible, setToggleMobMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // console.log("screenPos", window.pageYOffset);
    const screenPos = window.pageYOffset;
    screenPos > 102 ? setVisibility(false) : setVisibility(true);
    const aboutElem = document.getElementById("about")?.scrollHeight as number;
    // console.log("aboutElem", aboutElem);

    if (screenPos >= aboutElem) {
      setVisibility(true);
      setNavOpaque(true);
    } else setNavOpaque(false);
  };

  const mobMenuClick = () => {
    mobMenuVisible == false ? setToggleMobMenu(true) : setToggleMobMenu(false);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navClass = classNames("nav", "py-3", "fixed", "w-full", "z-50", {
    "top-0": mainNavVisible && !mobMenuVisible,
    "-top-11": !mainNavVisible && !mobMenuVisible,
    "bg-[#333]": navOpaque && !mobMenuVisible,
  });

  const mobileMenu = classNames(
    "relative",
    "top-10",
    "-right-1",
    "float-right",
    "bg-[#1f2024]",
    "p-7",
    "uppercase",
    "text-center",
    "space-y-3",
    "divide-y",
    "divide-dotted",
    "divide-[#2d2e34]",
    "rounded",
    // "animate-grow-animation",
    "transition-[transform,opacity]",
    "duration-150",
    "ease-in",
    {
      "-translate-y-8": !mobMenuVisible,
      "translate-y-0": mobMenuVisible,
      "opacity-0": !mobMenuVisible,
      "opacity-100": mobMenuVisible,
      "-z-10": !mobMenuVisible,
      "z-0": mobMenuVisible,
    }
  );

  const mbMenuListItem = classNames(
    "font-bold",
    "text-white",
    "pt-3",
    "cursor-pointer",
    {
      invisible: !mobMenuVisible,
      visible: mobMenuVisible,
    }
  );

  return (
    <nav className={navClass}>
      <div className="mobileNav sm:hidden">
        <IoIosMenu
          size="2.5rem"
          className=" relative right-8 float-right cursor-pointer text-[#f06000]"
          onClick={mobMenuClick}
        />
        <ul className={mobileMenu}>
          <li className={mbMenuListItem}>
            <ReactScrollLink
              to="home"
              smooth="true"
              activeClass="text-[#f06000]"
              spy={true}
            >
              home
            </ReactScrollLink>
          </li>
          <li className={mbMenuListItem}>
            <ReactScrollLink
              to="about"
              smooth="true"
              activeClass="text-[#f06000]"
              spy={true}
            >
              about
            </ReactScrollLink>
          </li>
          <li className={mbMenuListItem}>
            <ReactScrollLink
              to="resume"
              smooth="true"
              activeClass="text-[#f06000]"
              spy={true}
            >
              resume
            </ReactScrollLink>
          </li>
          <li className={mbMenuListItem}>
            <ReactScrollLink
              to="works"
              smooth="true"
              activeClass="text-[#f06000]"
              spy={true}
            >
              works
            </ReactScrollLink>
          </li>
          <li className={mbMenuListItem}>
            <ReactScrollLink
              to="contact"
              smooth="true"
              activeClass="text-[#f06000]"
              spy={true}
            >
              contact
            </ReactScrollLink>
          </li>
        </ul>
      </div>

      <ul className="hidden sm:flex sm:justify-center space-x-5 font-semibold text-sm uppercase ">
        <li className="cursor-pointer">
          <ReactScrollLink
            to="home"
            smooth="true"
            activeClass="text-[#f06000]"
            spy={true}
          >
            Home
          </ReactScrollLink>
        </li>
        <li className="cursor-pointer">
          <ReactScrollLink
            to="about"
            smooth="true"
            activeClass="text-[#f06000]"
            spy={true}
          >
            About
          </ReactScrollLink>
        </li>
        <li className="cursor-pointer">
          <ReactScrollLink
            to="resume"
            smooth="true"
            activeClass="text-[#f06000]"
            spy={true}
          >
            Resume
          </ReactScrollLink>
        </li>
        <li className="cursor-pointer">
          <ReactScrollLink
            to="works"
            smooth="true"
            activeClass="text-[#f06000]"
            spy={true}
          >
            Works
          </ReactScrollLink>
        </li>
        <li className="cursor-pointer">
          <ReactScrollLink
            to="contact"
            smooth="true"
            activeClass="text-[#f06000]"
            spy={true}
          >
            Contact
          </ReactScrollLink>
        </li>
      </ul>
    </nav>
  );
}