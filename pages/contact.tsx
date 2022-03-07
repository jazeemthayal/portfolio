import { FaEnvelope } from "react-icons/fa";

interface Props {
  id: string;
}

export default function Contact({ id }: Props) {
  return (
    <section id={id} className="py-20 bg-[#191919]">
      <div className="xl:mx-44">
        <div className="heading space-y-5 mb-10 md:flex md:justify-center md:space-y-0">
          {/* flex  */}
          <div className="icon  hidden pl-10 md:block">
            <FaEnvelope color="#ebeeee" size="72px" />
          </div>
          <h5 className="uppercase text-[#EBEEEE] font-bold tracking-widest text-center md:hidden">
            get in touch.
          </h5>
          <p className="max-w-3xl text-lg text-[#636363] px-10 text-center md:text-left">
            If you want to create a new website, web application, fix any issue,
            bugs of your website or you are looking for Web Developer then you
            are at right place.
          </p>
        </div>
        <div className="details space-y-10 lg:space-y-0 lg:flex">
          <form
            className="space-y-10 max-w-[541px] w-full px-5 m-auto"
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
          <div className="address lg:ml-24 max-w-[541px] px-5 m-auto">
            <h3 className="capitalize font-bold text-white">address</h3>
            <p className="text-[#636363] text-sm leading-7">
              Jazeem Thayal <br />
              Jabel Ali, Dubai <br />
              United Arab Emirates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
