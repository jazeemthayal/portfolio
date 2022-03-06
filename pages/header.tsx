import Navbar from "../components/navbar";
import { IconContext } from "react-icons";
import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link as ReactScrollLink } from "react-scroll";

interface Props {
  id: string;
}

export default function Header({ id }: Props) {
  return (
    <IconContext.Provider value={{ size: "1.75em" }}>
      <header
        id={id}
        className='bg-[url("../public/images/banner.jpg")] bg-cover bg-left-top bg-no-repeat text-white h-screen space-y-24 overflow-hidden '
      >
        <Navbar />
        <div className="content flex flex-col items-center divide-y ">
          <div className="flex flex-col items-center mb-4">
            <h1 className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-8 text-center">
              I'm Jazeem Thayal.
            </h1>
            <h3 className=' w-1/2 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-["librebaskerville-regular,serif"] text-center'>
              I'm a <span className="text-white">Web Developer</span>. My area
              of interest in the field of Full Stack Web Development and like to
              learn about new technologies, write technical articles.
            </h3>
          </div>
          <ul className="flex justify-center w-1/3 pt-4 space-x-7">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook className="hover:text-[#11abb0] transition-colors duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTwitter className="hover:text-[#11abb0] transition-colors duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin2 className="hover:text-[#11abb0] transition-colors duration-300 ease-in-out" />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImGithub className="hover:text-[#11abb0] transition-colors duration-300 ease-in-out" />
              </a>
            </li>
          </ul>
        </div>
        <div className="slide-btn flex justify-center">
          <div className="mt-16">
            <ReactScrollLink to="about" smooth="true">
              <IoIosArrowDropdownCircle
                size="3.25em"
                className="cursor-pointer transition-colors duration-700 ease-out  hover:text-[#11abb0] animate-bounce hover:animate-none"
              />
            </ReactScrollLink>
          </div>
        </div>
      </header>
    </IconContext.Provider>
  );
}
