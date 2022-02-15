import Head from "next/head";
import Header from "./header";
import About from "./about";
import Resume from "./resume";
import Works from "./works";
import Contact from "./contact";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jazeem Thayal - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header id="home" />
      <About id="about" />
      <Resume id="resume" />
      <Works id="works" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
