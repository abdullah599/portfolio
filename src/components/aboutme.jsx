import React, { Component } from "react";
import { Link, Element } from "react-scroll";
class Aboutme extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col justify-center w-full bg-[#f7f5f5] p-[40px] ">
        <Element name="aboutme" className="h-0"></Element>
        <h1 className="text-2xl md:text-4xl font-bold text-center font-sans uppercase">
          About me
        </h1>
        <p
          className="text-center text-gray-600 font-semibold text-3xl font-sans 
        text-[70px] md:text-[100px] text-violet-700 mb-3   mt-[-30px]"
        >
          _
        </p>
        <p className="text-justify text-gray-600 font-semibold text-xl font-sans  m-[2rem] md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="flex flex-col lg:flex-row  m-[2rem]  w-[100%] md:w-2/3 mx-auto my-10">
          <div className="flex flex-col   w-full lg:w-1/2 text-left my-1">
            <h1 className="text-xl lg:text-3xl font-bold font-sans uppercase text-justify ">
              Get to Know me!
            </h1>
            <p className="text-gray-600  text-xl font-sans  my-5 text-justify">
              I'm a <b>Frontend Web Developer</b> building the Front-end of
              Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the Projects
              section.
            </p>
            <p className="text-gray-600  text-xl font-sans  text-justify">
              Apart from front-end development, I enjoy spending my time doing{" "}
              <b>Machine Learning</b>, Data Science, and Competitive Programming
              . I also love to play video games and watch movies.
            </p>
            <p className="text-gray-600  text-xl font-sans  my-5 text-justify">
              I'm <b>open to Job opportunities</b> where I can contribute, learn
              and grow. If you have a good opportunity that matches my skills
              and experience then don't hesitate to contact me.
            </p>
            <Link
              className="middle none center rounded-lg bg-violet-700 py-4 text-center font-sans text-l font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2 sm:w-1/3 px-1"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
          <div className="my-12 lg:my-1 flex flex-col  w-full lg:w-1/2 text-left ">
            <h1 className="text-xl lg:text-3xl font-bold font-sans uppercase text-left lg:ml-[5rem]">
              My Skills
            </h1>
            <div className="flex flex-row  flex-wrap  justify-start lg:ml-[5rem] gap-2 text-sm lg:text-l">
              <button className=" middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[60px] max-w-[150px] my-5">
                HTML
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[65px] max-w-[150px] my-5">
                CSS
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[65px] max-w-[150px] my-5">
                TAILWIND
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[65px] max-w-[150px] my-5">
                JAVASCRIPT
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[65px] max-w-[150px] my-5">
                REACT JS
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none h-[65px]  max-w-[150px] my-5">
                MACHINE LEARNING
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none   h-[65px] max-w-[150px] my-5">
                COMPUTER VISION
              </button>
              <button className="middle none center rounded-lg bg-[rgba(153,153,153,.2)] py-3 px-5 font-sans text-l font-semibold uppercase text-[#666] shadow-md shadow-[rgba(153,153,153,.2)] transition-all hover:shadow-lg hover:shadow-[rgba(153,153,153,.2)]focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  h-[65px]  max-w-[150px] my-5">
                DSA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
