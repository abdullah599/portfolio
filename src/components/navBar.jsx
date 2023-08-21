import React, { Component } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, Element } from "react-scroll";
import DarkModeToggle from "./darkModeToggle";

class NavBar extends Component {
  state = {
    nav: true,
  };
  setNavBar = () => {
    this.setState({ nav: !this.state.nav });
  };

  render() {
  
    return (
      <div className="  flex text-2xl text-[color:var(--primary-text-color)] justify-between  bg-[color:var(--background-color-2)] h-24 w-full  font-semibold mx-auto  p-[1rem] ">
        <div className="p-4 block md:hidden z-10" onClick={this.setNavBar}>
          {!this.state.nav ? (
            <AiOutlineClose size={30} color="white" />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <h1 className="flex items-center md:p-4 md:ml-0 text-2xl sm:text-2xl ">
          Abdullah Shakeel
        </h1>
        <ul className="hidden md:flex lg:ml-[-13rem]">
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

        <div
          className={
            this.state.nav
              ? "fixed left-[-100%]"
              : "fixed top-0 left-0 p-4 w-[60%] border-r border-r-gray-900 h-full bg-gray-600 text-white ease-in-out transition-all duration-500 z-2"
          }
        >
          <ul className=" flex flex-col  md:hidden pt-24 z-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="py-4 text-sm border-b  border-white "
              onClick={
                (this.setNavBar = () => {
                  this.setState({ nav: !this.state.nav });
                })
              }
            >
              Home
            </Link>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              className=" text-sm border-b py-4  border-white"
              onClick={
                (this.setNavBar = () => {
                  this.setState({ nav: !this.state.nav });
                })
              }
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="text-sm border-b py-4  border-white"
              onClick={
                (this.setNavBar = () => {
                  this.setState({ nav: !this.state.nav });
                })
              }
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-sm border-b py-4  border-white "
              onClick={
                (this.setNavBar = () => {
                  this.setState({ nav: !this.state.nav });
                })
              }
            >
              Contact
            </Link>
          </ul>
        </div>
        <DarkModeToggle className="md:hidden" />
      </div>
    );
  }
}

export default NavBar;
