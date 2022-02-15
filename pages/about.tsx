import Image from "next/image";
import ProfilePic from "../public/images/profile-pic.jpeg";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

interface Props {
  id: string;
}

export default function About({ id }: Props) {
  return (
    <section className=" bg-[#2b2b2b] py-20" id={id}>
      <div className="mx-44 flex justify-between">
        <div className="img">
          <Image
            src={ProfilePic}
            width={130}
            height={130}
            className="rounded-full"
          />
        </div>
        <div className="content max-w-3xl space-y-5">
          <h2 className="text-white text-2xl font-bold ">About Me</h2>
          <p className="text-[#7a7a7a] text-xl">
            I am final year student pursuing B.Tech+M.Tech (IT) from Indian
            Institute of Information Technology & Management, Gwalior. My area
            of interest in the field of Full Stack Web Development. My aim is to
            contribute effectively to the organization with my problem-solving
            skills and optimized approaches, and my energy to work as a team
            while gaining experience and sharpen my skill sets. Recently, I have
            been exploring blockchain as well.
          </p>
          <div className="contact-details flex space-x-12">
            <div className="details space-y-3">
              <h2 className="text-white text-2xl font-bold">Contact Details</h2>
              <p className="text-[#7a7a7a] text-xl">
                Aditya Santra <br /> BH3, ABV-IIITM
                <br /> Gwalior Madhya Pradesh, 474015
                <br />
                adityassid@gmail.com
              </p>
            </div>
            <div className="download-btn">
              <Link href="/">
                <a className="py-4 px-5 font-bold rounded block text-white  bg-[#444] hover:text-[#2b2b2b] hover:bg-white transition-colors duration-300 ease-in-out">
                  <FaDownload className="mr-4 w-4 inline align-bottom" />
                  Download Resume
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
