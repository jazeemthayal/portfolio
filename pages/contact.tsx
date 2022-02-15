import { FaEnvelope } from "react-icons/fa";

interface Props {
  id: string;
}

export default function Contact({ id }: Props) {
  return (
    <section id={id} className="py-20 bg-[#191919]">
      <div className="mx-44">
        <div className="heading flex mb-10">
          <div className="icon w-44">
            <FaEnvelope color="#ebeeee" size="72px" />
          </div>
          <p className="max-w-3xl text-lg text-[#636363]">
            If you want to create a new website, web application, fix any issue,
            bugs of your website or you are looking for Web Developer then you
            are at right place.
          </p>
        </div>
        <div className="details lg:flex">
          <form
            className="space-y-10 max-w-[541px] w-full"
            autoComplete="new-off"
          >
            <div className="lg:flex lg:items-start">
              <label
                htmlFor="name"
                className="inline-block max-w-[11rem] w-full text-white capitalize font-bold pt-3"
              >
                name<span className="text-cyan-600"> *</span>
              </label>
              <input
                type="text"
                id="name"
                className="h-14 p-4 w-full bg-slate-300 font-semibold focus:outline-none focus:shadow-[0_0_0_1000px_rgb(203,213,225)_inset] autofill:shadow-[0_0_0_1000px_rgb(203,213,225)_inset]"
              />
            </div>
            <div className="lg:flex lg:items-start">
              <label
                htmlFor="email"
                className="inline-block max-w-[11rem] w-full text-white capitalize font-bold pt-3"
              >
                email<span className="text-cyan-600"> *</span>
              </label>
              <input
                type="email"
                id="email"
                className="h-14 p-4 w-full bg-slate-300 font-semibold focus:outline-none focus:shadow-[0_0_0_1000px_rgb(203,213,225)_inset] autofill:shadow-[0_0_0_1000px_rgb(203,213,225)_inset]"
              />
            </div>
            <div className="lg:flex lg:items-start">
              <label
                htmlFor="subject"
                className="inline-block max-w-[11rem] w-full text-white capitalize font-bold pt-3"
              >
                subject
              </label>
              <input
                type="text"
                id="subject"
                className="h-14 p-4 w-full bg-slate-300 font-semibold focus:outline-none focus:shadow-[0_0_0_1000px_rgb(203,213,225)_inset] autofill:shadow-[0_0_0_1000px_rgb(203,213,225)_inset]"
              />
            </div>
            <div className="lg:flex lg:items-start">
              <label
                htmlFor="message"
                className="inline-block max-w-[11rem] w-full text-white capitalize font-bold pt-3"
              >
                message<span className="text-cyan-600"> *</span>
              </label>
              <textarea
                id="message"
                className="h-44  w-full p-4 bg-slate-300 font-semibold focus:outline-none focus:shadow-[0_0_0_1000px_rgb(203,213,225)_inset] autofill:shadow-[0_0_0_1000px_rgb(203,213,225)_inset]"
              />
            </div>
            <div className="w-full lg:ml-44">
              <a className="px-4 py-3 inline-block bg-black text-white uppercase font-bold rounded tracking-widest cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
                submit
              </a>
            </div>
          </form>
          <div className="address ml-24">
            <h3 className="capitalize font-bold text-white">address</h3>
            <p className="text-[#636363] text-sm leading-7">
              Aditya Santra <br />
              BH3, ABV-IIITM <br />
              Gwalior, Madhya Pradesh 474015
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
