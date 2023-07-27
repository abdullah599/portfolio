import React, { Component } from 'react'
class SingleProject extends Component {
    state = { 
        heading: "Battleship",
        description:"hello"
    } 
    ;
    render() { 
        let image = this.props.img;
        console.log(image);
        return (
          <div className="md:my-1 flex flex-col justify-between items-center :item-start xl:justify-start xl:flex-row  my-10 w-full md:mt-[100px] ">
            <img
                    src={require("../Images/" + this.props.img)}
              alt="Image"
              className="w-[50%px] h-[30%px] md:w-[70%] lg:w-[60%]  object-cover object-center rounded-lg  "
            />
            <div className="flex-col my-10 lg:my-1 xl:ml-[5rem] lg:mr-4">
              <h1 className="text-2xl font-bold text-center font-sans uppercase lg:mt-10">
                {this.props.heading}
              </h1>
              <p className="text-justify text-gray-600 font-semibold text-xl font-sans my-4 w-full ">
                {this.props.description}
              </p>
            </div>
          </div>
        );
    }
}
 
export default SingleProject;