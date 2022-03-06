import Link from "next/link";
import Image from "next/image";
import Ebook from "../public/images/ebook.digitaldata.in.jpg";

interface Props {
  id: string;
}

export default function Works({ id }: Props) {
  return (
    <section id={id} className="bg-[#ebeeee] py-20">
      <h2 className="font-semibold text-[#95a3a3] tracking-widest text-center mb-10">
        CHECK OUT SOME OF MY WORKS.
      </h2>
      <div className="details justify-items-center grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="detail-1 relative group w-full max-w-[230px] ">
          <Link href="/">
            <a>
              <div className="bg-no-repeat bg-cover  max-w-[230px] h-[150px] bg-[url('/images/ebook.digitaldata.in.jpg')]"></div>
              <div className="overlay opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out top-0 left-0 w-full h-full bg-[url('/images/overlay-bg.png')]">
                <div className="item-meta p-4">
                  <h5 className="text-white font-bold text-sm">
                    Online ebook selling website
                  </h5>
                  <p className="text-[#c6c7c7] text-xs">
                    A React based online ebook selling website
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="detail-2 relative group w-full max-w-[230px] ">
          <Link href="/">
            <a>
              <div className="bg-no-repeat bg-cover max-w-[230px] h-[150px] bg-[url('/images/digitaldata.in.jpg')]"></div>
              <div className="overlay opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out top-0 left-0 w-full h-full bg-[url('/images/overlay-bg.png')]">
                <div className="item-meta p-4">
                  <h5 className="text-white font-bold text-sm">
                    DigitalData Bloging Website
                  </h5>
                  <p className="text-[#c6c7c7] text-xs">
                    Tech Blog in Web Development, Machine Learning, Digital
                    Marketing, Cloud Computing, etc.
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="detail-3 relative group w-full max-w-[230px] ">
          <Link href="/">
            <a>
              <div className="bg-no-repeat bg-cover max-w-[230px] h-[150px] bg-[url('/images/food.digitaldata.in.jpg')]"></div>
              <div className="overlay opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out top-0 left-0 w-full h-full bg-[url('/images/overlay-bg.png')]">
                <div className="item-meta p-4">
                  <h5 className="text-white font-bold text-sm">
                    Food Review Website
                  </h5>
                  <p className="text-[#c6c7c7] text-xs">
                    Website I built for a restaurant
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className="detail-4 relative group w-full max-w-[230px] ">
          <Link href="/">
            <a>
              <div className="bg-no-repeat bg-cover max-w-[230px] h-[150px] bg-[url('/images/aditya.digitaldata.in.jpg')]"></div>
              <div className="overlay opacity-0 group-hover:opacity-100 absolute transition-opacity duration-300 ease-in-out top-0 left-0 w-full h-full bg-[url('/images/overlay-bg.png')]">
                <div className="item-meta p-4">
                  <h5 className="text-white font-bold text-sm">
                    Resume Website
                  </h5>
                  <p className="text-[#c6c7c7] text-xs">
                    A NextJS based resume website
                  </p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
