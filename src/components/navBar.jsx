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
      <div className="flex text-2xl text-[#242424] justify-between  bg-[rgb(241,240,240)] h-24 w-full  font-semibold mx-auto  p-[1rem] md: ">
        <h1 className="flex items-center md:p-4 md:ml-10 text-2xl sm:text-2xl ">
          Abdullah Shakeel
        </h1>
        <ul className="hidden md:flex">
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
          <ul className=" flex flex-col  md:hidden pt-24 ">
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
      </div>
    );
  }
}

export default NavBar;
