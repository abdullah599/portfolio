import React, { Component } from "react";
import SingleProject from "./singleProject";
import { Element, Link } from "react-scroll";
class Project extends Component {
  state = {
    projects: [
      {
        heading: "Battleship",
        description: `Battleship is a strategy type guessing game for two players. It
                is played on ruled grids on which each player's fleet of ships
                are marked. The locations of the fleets are concealed from the
                other player. Players alternate turns calling "shots" at the
                other player's ships, and the objective of the game is to
                destroy the opposing player's fleet.`,
        img: "Battleship.png",
      },
      {
        heading: "Food Donation",
        description: `Food Donarion website is intended to provide a platform for the people who want to donate food to the needy people. The website is developed using HTML, CSS, JavaScript, Bootstrap, PHP and MySQL. `,
        img: "fooddonation.png",
      },
      {
        heading: "BBC clone",
        description: `This website is clone of BBC website. It is developed using HTML, CSS, and JavaScript.`,
        img: "bbc.png",
      },
    ],
  };
  render() {
    return (
      <div className="flex flex-col justify-center w-full bg-[#fdfcfc] p-[40px] ">
        <Element name="project" className="h-0"></Element>
        <h1 className="text-2xl md:text-4xl  font-bold text-center font-sans uppercase">
          Projects
        </h1>
        <p className="text-center text-gray-600 font-semibold text-3xl font-sans text-[70px] md:text-[100px] text-violet-700 mb- 3   mt-[-30px]">
          _
        </p>
        <p className="mx-auto text-just text-gray-600 font-semibold text-xl font-sans  m-[2rem] md:w-1/2 lg:w-1/2 xl:w-1/3  lg:mb-0">
          Here you will find more information about me, what I do, my projects
          and my current skills mostly in terms of programming and technology
        </p>
        <div className="flex flex-col   m-[2rem]  w-[100%] md:w-2/3 mx-auto ">
          {this.state.projects.map((project) => (
            <SingleProject
              heading={project.heading}
              description={project.description}
              img={project.img}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
