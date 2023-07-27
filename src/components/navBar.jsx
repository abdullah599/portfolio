import React, { Component } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Element } from "react-scroll";

class NavBar extends Component {
  state = {
    nav: true,
  };
  setNavBar = () => {
    this.setState({ nav: !this.state.nav });
  };
  render() {
    return (
      <div className="flex text-2xl text-[#242424] justify-between  bg-[rgb(241,240,240)] h-24 w-full  font-semibold mx-auto px-12 py-3">
        <h1 className="p-4 ml-10 text-2xl sm:text-3xl ">Abdullah Shakeel</h1>
        <ul className=" hidden md:flex">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-4 text-xl hover:cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="aboutme"
            smooth={true}
            duration={500}
            className="p-4 text-xl hover:cursor-pointer hover:underline "
          >
            About
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
            className="p-4 text-xl hover:cursor-pointer hover:underline"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="p-4 text-xl hover:cursor-pointer hover:underline"
          >
            Contact
          </Link>
        </ul>
        <div className="p-4 block md:hidden " onClick={this.setNavBar}>
          {!this.state.nav ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <div
          className={
            this.state.nav
              ? "fixed left-[-100%]"
              : "fixed top-0 left-0 p-4 w-[60%] border-r border-r-gray-900 h-full bg-gray-600 text-white ease-in-out transition-all duration-500"
          }
        >
          <ul className="pt-24">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="p-5 text-xl border-b  border-white"
            >
              Home
            </Link>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              className="p-5 text-xl border-b  border-white"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="p-5 text-xl border-b  border-white"
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="p-5 text-xl "
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
