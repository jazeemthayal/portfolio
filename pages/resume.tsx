import SkillElement from "../components/skill-element";

interface Props {
  id: string;
}

export default function Resume({ id }: Props) {
  return (
    <section className="py-20" id={id}>
      <div className="content max-w-screen-lg m-auto space-y-14">
        {/* xl:mx-44 */}
        <div
          className="edu md:flex pb-11 px-5 border-b-[1px] border-slate-200 
        text-center md:text-left space-y-5 md:space-y-0"
        >
          <div className="heading md:w-1/4">
            <span
              className="uppercase text-lg text-[#313131] font-semibold pb-1
             border-b-[3px] border-[#11abb0]"
            >
              education
            </span>
          </div>
          <div className="max-w-2xl space-y-5 md:space-y-0 details md:w-3/4">
            <h2 className="text-2xl text-[#313131] font-bold">
              Indian Institute of Information Technology & Management, Gwalior
            </h2>
            <p className="text-[#6e7881] text-lg">
              <em className='font-["librebaskerville",serif]'>
                B.Tech+M.Tech (IT)
              </em>
              <span className="mx-1">•</span>
              <span className="text-sm">May 2020</span>
            </p>
          </div>
        </div>
        <div
          className="work md:flex pb-11 px-5 border-b-[1px] border-slate-200
         text-center md:text-left space-y-5 md:space-y-0"
        >
          <div className="heading md:w-1/4">
            <span
              className="uppercase text-lg text-[#313131] font-semibold pb-1 
            border-b-[3px] border-[#11abb0]"
            >
              work
            </span>
          </div>
          <div className="max-w-2xl space-y-5 md:space-y-12 details md:w-3/4">
            <div className="detail-1">
              <h2 className="text-2xl text-[#313131] font-bold">
                WNS Global services
              </h2>
              <p className="text-[#6e7881] text-lg">
                <em className='font-["librebaskerville",serif]'>
                  Web Developer Intern
                </em>
                <span className="mx-1">•</span>
                <span className="text-sm">May 2019 - July 2019</span>
              </p>
              <p className="text-[#838c95]">
                Developing a front-end to integrate bunch of predictive data
                science models in Insurance analytics space. Developed a web
                application for deploying end to end predictive data science
                models along with analytics and visualization. Technologies
                uses: HTML, CSS, Bootstrap, Javascript, Flask, Chart.JS, etc.
              </p>
            </div>
            <div className="detail-2">
              <h2 className="text-2xl text-[#313131] font-bold">
                MyAnalyticsMentor.com
              </h2>
              <p className="text-[#6e7881] text-lg">
                <em className='font-["librebaskerville",serif]'>
                  Web Developer Intern
                </em>
                <span className="mx-1">•</span>
                <span className="text-sm">August 2018 - November 2018</span>
              </p>
              <p className="text-[#838c95]">
                Added various functionalities like on page load show popup
                window, subscribe newsletter button, design all content of the
                website, etc. Page testing/performance optimization. Customize
                themes and plugins of Word Press Site.
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 space-y-5 skills md:flex md:space-y-0">
          <div className="text-center md:text-left heading md:w-1/4">
            <span className="uppercase text-lg text-[#313131] font-semibold pb-1 border-b-[3px] border-[#11abb0]">
              skills
            </span>
          </div>
          <div className="max-w-2xl space-y-6 details md:w-3/4">
            <SkillElement name="html" percent={90} />
            <SkillElement name="css" percent={80} />
            <SkillElement name="bootstrap" percent={75} />
            <SkillElement name="javascript" percent={87} />
            <SkillElement name="reactjs" percent={85} />
            <SkillElement name="nodejs" percent={80} />
            <SkillElement name="mongodb" percent={70} />
            <SkillElement name="git" percent={75} />
            <SkillElement name="digital marketing" percent={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
