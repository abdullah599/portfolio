import React, { Component } from 'react'
import { Element } from "react-scroll";
class Contact extends Component {
    state = {  } 
    render() { 
        return (
          <div className="flex flex-col justify-center w-full bg-[color:var(--background-color-2)]  p-[40px] ">
            <Element name="contact" className="h-0"></Element>
            <h1 className="text-2xl md:text-4xl  font-bold text-center font-sans uppercase text-[color:var(--primary-text-color)]">
              Contact
            </h1>
            <p className="text-center font-semibold text-3xl font-sans text-[70px] md:text-[100px] text-violet-700 mb-3   mt-[-30px]">
              _
            </p>
            <p className="text-justify  text-[color:var(--secondary-text-color)] font-semibold text-xl font-sans  m-[2rem] md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto">
              If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>

            {/* <div class="flex items-center justify-center p-12">
              <div class="mx-auto w-full max-w-[550px]">
                <form action="#  " method="POST">
                  <div class="mb-5 text-[color:var(--primary-text-color)]">
                    <label for="name" class="mb-3 block text-base font-medium ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[color:var(--primary-text-color)]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="subject"
                      class="mb-3 block text-base font-medium text-[color:var(--primary-text-color)]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="message"
                      class="mb-3 block text-base font-medium text-[color:var(--primary-text-color)]"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="hover:shadow-form rounded-md bg-violet-700 py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
            <div className="flex flex-col md:flex-row justify-between  md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto">
              <a
                className="middle none center rounded-lg bg-violet-700 py-4 text-center font-sans text-l font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2 sm:w-1/3 lg:w-[250px] px-1 mx-auto my-10"
                href="https://www.linkedin.com/in/abdullah-shakeel-a77748224"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="middle none center rounded-lg bg-violet-700 py-4 text-center font-sans text-l font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-1/2 sm:w-1/3 px-1 lg:w-[250px] mx-auto my-10"
                href="mailto:abdullahshakeel599@gmail.com"
                target="_blank"
              >
                Gmail
              </a>
            </div>
          </div>
        );
    }
}
 
export default Contact;