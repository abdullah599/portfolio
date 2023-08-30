import React, { Component } from "react";
import SingleProject from "./singleProject";
import { Element, Link } from "react-scroll";
class Project extends Component {
  state = {
    projects: [
      {
        heading: "Battleship",
        tech: "C++ | OOP | SFML",
        description: `Battleship is a strategy type guessing game for two players. It
                is played on ruled grids on which each player's fleet of ships
                are marked. The locations of the fleets are concealed from the
                other player. Players alternate turns calling "shots" at the
                other player's ships, and the objective of the game is to
                destroy the opposing player's fleet.`,
        img: "Battleship.png",
      },
      {
        heading: "E-Commerce Admin Panel",
        tech: "HTML | CSS | JavaScript | TailwindCSS | ReactJS | PostgreSQL",
        description: `This is a responsive admin panel for my ongoing E-commerce Full-stack website personal project. It is used to manage the products, categories, orders, and users of the website. Admin can add, update, and delete products, categories, orders, and users.`,
        img: "admin.png",
      },
      {
        heading: "Food Donation",
        tech: "HTML | CSS | JavaScript | Bootstrap | PHP | PostgreSQL | Kotlin | Android Studio | Firebase",
        description: `Food Donarion website is intended to provide a platform for the people who want to donate food to the needy people. The website is developed for the purpose of providing food to the needy people. It has three profiles: Donor, Receiver and Rider. The donor can donate food by filling a form. The receiver can request for food by filling a form. The rider can deliver the food to the receiver.`,
        img: "fooddonation.png",
      },

      {
        heading: "BBC clone",
        tech: "HTML | CSS | JavaScript",
        description: `This website is clone of BBC website frontend. It is developed using HTML, CSS, and JavaScript.`,
        img: "bbc.png",
      },
    ],
  };
  render() {
    return (
      <div className="flex flex-col justify-center w-full bg-[color:var(--background-color-1)]  p-[40px] ">
        <Element name="project" className="h-0"></Element>
        <h1 className="text-2xl md:text-4xl  font-bold text-center font-sans uppercase text-[color:var(--primary-text-color)] ">
          Projects
        </h1>
        <p className="text-center text-gray-600 font-semibold text-3xl font-sans text-[70px] md:text-[100px] text-violet-700 mb- 3   mt-[-30px]">
          _
        </p>
        <p className="mx-auto text-justify text-[color:var(--secondary-text-color)]  font-semibold text-xl font-sans  m-[2rem] md:w-1/2 lg:w-1/2 xl:w-1/3  lg:mb-0">
          Here you will find more information about me, what I do, my projects
          and my current skills mostly in terms of programming and technology
        </p>
        <div className="flex flex-col   m-[2rem]  w-[100%] md:w-2/3 mx-auto ">
          {this.state.projects.map((project) => (
            <SingleProject
              heading={project.heading}
              description={project.description}
              img={project.img}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
