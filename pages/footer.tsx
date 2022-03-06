import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";
import { IconContext } from "react-icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link as ReactScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] py-14">
      <ReactScrollLink to="home" smooth="true">
        <MdKeyboardArrowUp
          size="4.25em"
          className="absolute -top-9 left-1/2 -ml-[34px] cursor-pointer  transition-colors duration-300 ease-out  text-white hover:bg-[#11abb0]  bg-[#525252] rounded-full"
        />
      </ReactScrollLink>
      <div className="flex justify-center space-x-10">
        <IconContext.Provider value={{ size: "1.75em" }}>
          {/* note : Link note needed because fresh load of page is opening in new tab */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImFacebook className="text-[#525252] hover:text-white transition-colors duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImTwitter className="text-[#525252] hover:text-white transition-colors duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImLinkedin2 className="text-[#525252] hover:text-white transition-colors duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ImGithub className="text-[#525252] hover:text-white transition-colors duration-300 ease-in-out" />
          </a>
        </IconContext.Provider>
      </div>
      <p className="text-center mt-7 text-[#303030]">© Copyright 2020</p>
    </footer>
  );
}
