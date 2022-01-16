import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='bg-[url("../public/images/banner.jpg")] text-white'>
        <nav className="py-3 mb-16">
          <ul className="flex justify-center space-x-5 font-semibold text-sm uppercase ">
            <li>Home</li>
            <li>About</li>
            <li>Resume</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="flex flex-col items-center divide-y ">
          <div className="flex flex-col items-center mb-4">
            <h1 className=" text-8xl font-bold py-8">I'm Jazeem Thayal.</h1>
            <h3 className=' w-1/2 text-gray-400 text-2xl font-["librebaskerville-regular,serif"] text-center'>
              I'm a <span className="text-white">Web Developer</span>. My area
              of interest in the field of Full Stack Web Development and like to
              learn about new technologies, write technical articles.
            </h3>
          </div>
          <ul className="pt-4">
            <li><i className="fa fa-twitter"></i></li>
            <li>soc icon 2</li>
            <li>soc icon 3</li>
            <li>soc icon 4</li>
          </ul>
        </div>
      </header>
    </>
  );
}
