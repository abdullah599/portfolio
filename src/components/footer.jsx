import React, { Component } from "react";
import { Link } from "react-scroll";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="w-full">
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Abdullah Shakeel . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400 hover:cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="aboutme"
                smooth={true}
                duration={500}
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                href="#"
                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                href="#"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
