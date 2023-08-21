import React, { Component } from "react";
import {Link,  Element } from "react-scroll";
import { SocialIcon } from "react-social-icons";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className=" flex  text-center text-gray-50 h-[40vh] w-full max-w-[900px] justify-center my-[15%] mx-auto  ">
        <Element name="home" className="h-0"></Element>
        <div className="hidden lg:flex text-black   absolute top-1/3 left-0 h-[35%] bg-white w-[80px]  flex-col rounded-r-xl">
          <SocialIcon
            url="https://github.com/abdullah599"
            className="m-4 "
            target="_blank"
            fgColor="#fff"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/abdullah-shakeel-a77748224"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#252525"
          />
          <SocialIcon
            url="https://www.instagram.com/abdullah0___o/"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#252525"
          />
          <SocialIcon
            url="https://www.facebook.com/abdullahshakeel123"
            className="m-4"
            target="_blank"
            fgColor="#fff"
            bgColor="#252525"
          />
        </div>
        <div className="">
          <h1 className="uppercase  text-[color:var(--header-text-color)] font-bold  text-3xl md:text-6xl font-sans mx-auto">
            Hi, I'm Abdullah Shakeel
          </h1>
          <p className=" text-[color:var(--secondary-text-color)] font-semibold text-l md:text-xl m-[2rem] font-sans ">
            Passionate frontend developer that loves to build beautiful and
            performant web applications.
          </p>
          <Link
            className="middle none center rounded-lg bg-violet-700 py-3 px-20 font-sans text-l font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            to="project"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
