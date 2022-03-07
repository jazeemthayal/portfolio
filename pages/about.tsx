import Image from "next/image";
import ProfilePic from "../public/images/profile-pic.jpeg";
import { FaDownload } from "react-icons/fa";

interface Props {
  id: string;
}

export default function About({ id }: Props) {
  return (
    <section className=" bg-[#2b2b2b] py-20" id={id}>
      <div className="flex justify-center mx-10 xl:mx-44">
        <div className="hidden  lg:block img min-w-[130px] mr-10">
          <Image
            src={ProfilePic}
            width={130}
            height={130}
            className="rounded-full"
          />
        </div>
        <div className="max-w-md space-y-5 content lg:max-w-3xl">
          <h2 className="text-2xl font-bold text-white ">About Me</h2>
          <p className="text-[#7a7a7a]">
            I'm a 3+ years experienced web developer. My area of interest in the
            field of Full Stack Web Development. My aim is to contribute
            effectively to the organization with my problem-solving skills and
            optimized approaches, and my energy to work as a team while gaining
            experience and sharpen my skill sets.
            {/* I am final year student pursuing B.Tech+M.Tech (IT) from Indian
            Institute of Information Technology & Management, Gwalior. My area
            of interest in the field of Full Stack Web Development. My aim is to
            contribute effectively to the organization with my problem-solving
            skills and optimized approaches, and my energy to work as a team
            while gaining experience and sharpen my skill sets. Recently, I have
            been exploring blockchain as well. */}
          </p>
          <div className="contact-details lg:flex lg:space-x-12">
            <div className="space-y-3 details">
              <h2 className="text-2xl font-bold text-white">Contact Details</h2>
              <p className="text-[#7a7a7a] text-xl">
                Jazeem Thayal <br /> Jabel Ali, Dubai
                <br /> United Arab Emirates
                <br />
                jazeemthayal@gmail.com
              </p>
            </div>
            <div className="mt-5 download-btn">
              <a
                href="/docs/Jazeem-resume-7-3-22.pdf"
                target="_blank"
                download
                className="py-4 px-5 font-bold text-white rounded block 
                bg-[#444] hover:text-[#2b2b2b] hover:bg-white transition-colors duration-300
                 ease-in-out white text-center"
              >
                <FaDownload className="inline w-4 mr-4 align-bottom" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
