import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./SampleProgram.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

export default function SampleProgram() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className="text-xl font-bold">
            Sample Training Module: Complete Web Development with JavaScript,
            React and Node
          </h1>
          <ul>
            <li className="ml-10 mb-2 font-bold">Milestone 0: Preparation</li>

            <li className="ml-10 mb-2">
              Module 1: Orientation and Preparation for the course
            </li>
            <li className="ml-10 mb-2 font-bold">
              Milestone 1: Develop Your Personal Portfolio
            </li>
            <li className="ml-10 mb-2">
              Module 2: Learn and Explore CSS as a Beginner
            </li>
            <li className="ml-10 mb-2">
              Module 3: Git, source control, GitHub and hosting
            </li>
            <li className="ml-10 mb-2">
              Module 4: Build a beautiful and professional portfolio website
            </li>
            <li className="ml-10 mb-2">
              Module 5: Personal website, build a brand new website
            </li>
            <li className="ml-10 mb-2 font-bold">
              Milestone 2: Responsive Web Layout
            </li>
            <li className="ml-10 mb-2">
              Module 6: HTML 5 Semantic tags, audio, video, table, form
            </li>
            <li className="ml-10 mb-2">
              Module 7: More CSS, Icon, CSS3 animation
            </li>
            <li className="ml-10 mb-2"> Module 8: Responsive CSS Layout</li>
            <li className="ml-10 mb-2">Module 9: HTML CSS only Landing Page</li>
            <li className="ml-10 mb-2"> Module 10: Responsive Website 2</li>
            <li className="ml-10 mb-2 font-bold">
              Milestone 3: CSS Frameworks
            </li>
            <li className="ml-10 mb-2">
              Module 11: Magic of Bootstrap (Getting started)
            </li>
            <li className="ml-10 mb-2">
              Module 12: Responsive Layout using Bootstrap
            </li>
            <li className="ml-10 mb-2">
              Module 13: Simple e-commerce landing page using Bootstrap
            </li>
            <li className="ml-10 mb-2">
              Module 14: A simple Introduction to Tailwind
            </li>
            <li className="ml-10 mb-2">
              Module 15: Responsive Landing Page Assignment
            </li>
            <li className="ml-10 mb-2 font-bold">
              Milestone 4: Basic JavaScript
            </li>
            <li className="ml-10 mb-2">
              Module 16: Introduction to JavaScript
            </li>
            <li className="ml-10 mb-2">
              Module 17: Fundamental Concepts Array and contionals
            </li>
            <li className="ml-10 mb-2">
              Module 18: Core Concepts functions and objects
            </li>
            <li className="ml-10 mb-2">Module 19: Apply Javascript Concepts</li>
            <li className="ml-10 mb-2">
              Module 20: JavaScript Simple Coding Problems
            </li>
            <li className="ml-10 mb-2"> Module 21: More JS Coding Problems</li>
            <li className="ml-10 mb-2"> Module 22: Assignment</li>
            <li className="ml-10 mb-2">
              Milestone 5: Integrate JavaScript (JavaScript in a Relation)
            </li>
            <li className="ml-10 mb-2">
              Module 23: How Javascript Works & DOM
            </li>
            <li className="ml-10 mb-2">
              Module 24: Event, addEventListener, Event bubble
            </li>
            <li className="ml-10 mb-2">
              Module 25: Baap Er Bank, simple bank transaction
            </li>
            <li className="ml-10 mb-2">Module 26: Functional Bank(advanced)</li>
            <li className="ml-10 mb-2">
              Module 27: Revisit Javascript and work on Shopping Cart
            </li>
            <li className="ml-10 mb-2">
              Module 28: String and Array useful methods
            </li>
            <li className="ml-10 mb-2">
              Module 29: Interactive Mac book Pro Assignment
            </li>
            <li className="ml-10 mb-2">
              Milestone 6: Intermediate JavaScript, API
            </li>
            <li className="ml-10 mb-2">
              Module 30: JS Recap and Basic ES6, ES2015
            </li>
            <li className="ml-10 mb-2"> Module 31: ES6, Class, Inheritance</li>
            <li className="ml-10 mb-2"> Module 32: Getting started with API</li>
            <li className="ml-10 mb-2">
              Module 33: API Examples and edge cases
            </li>
            <li className="ml-10 mb-2">
              Module 34: JavaScript Tricky Concepts
            </li>
            <li className="ml-10 mb-2">
              Module 35: JavaScript Object Concepts
            </li>
            <li className="ml-10 mb-2"> Module 36: Assignment-6</li>
            <li className="ml-10 mb-2"> Milestone 7: Browser & Debug</li>
            <li className="ml-10 mb-2">
              Module 37: How JavaScript and Browser works
            </li>
            <li className="ml-10 mb-2"> Module 38: Browser API and methods</li>
            <li className="ml-10 mb-2">
              Module 39: JavaScript debug, web debug, dev tool mastering
            </li>
            <li className="ml-10 mb-2">
              Module 40: More debug and Regular Expression
            </li>
            <li className="ml-10 mb-2">
              Module 41: Getting started with Typescript
            </li>
            <li className="ml-10 mb-2">
              Module: 42: JavaScript You need to know for React
            </li>
            <li className="ml-10 mb-2"> Module 43: Assignment -7</li>
            <li className="ml-10 mb-2"> Milestone 8 Simple React</li>
            <li className="ml-10 mb-2">
              Module 44: Modern Front-end core concepts
            </li>
            <li className="ml-10 mb-2">
              Module 45: React Core Concepts, JSX, props, state
            </li>
            <li className="ml-10 mb-2">
              Module 46: Simple React Rest Countries
            </li>
            <li className="ml-10 mb-2">
              Module 48: Simple React SPA with simple e-commerce
            </li>
            <li className="ml-10 mb-2">
              Module 49: Save and searchable e-commerce
            </li>
            <li className="ml-10 mb-2"> Module 50: React SPA Assignment 8</li>
            <li className="ml-10 mb-2">Milestone: 9 React Router and States</li>
            <li className="ml-10 mb-2">
              Module 51: React Bootstrap, Material IJI, Axios, Rechart
            </li>
            <li className="ml-10 mb-2">
              Module 52: Simple React Router Examples
            </li>
            <li className="ml-10 mb-2">
              Module 53: ema-john with router and custom hook
            </li>
            <li className="ml-10 mb-2">
              Module 54: Router deploy, Simple Context API
            </li>
            <li className="ml-10 mb-2">
              Module 55: Educational Website Assignment 9
            </li>
            <li className="ml-10 mb-2"> Milestone 10: React Authentication</li>
            <li className="ml-10 mb-2">
              Module 56: Simple React Firebase authentication
            </li>
            <li className="ml-10 mb-2">
              Module 57: Email Password Authentication, Login Form
            </li>
            <li className="ml-10 mb-2">
              Module 58: React Auth Integration and Private Route
            </li>
            <li className="ml-10 mb-2">
              Module 59: Private Route Recap with Ema-John
            </li>
            <li className="ml-10 mb-2">
              Module 60: Responsive React Website and React Recap
            </li>
            <li className="ml-10 mb-2">
              Module 61 : React Router and Firebase Auth Recap
            </li>
            <li className="ml-10 mb-2"> Module 62: React Auth Assignment 10</li>
            <li className="ml-10 mb-2">
              Milestone 11: Backend and Database Integrate
            </li>
            <li className="ml-10 mb-2">
              Module 63: Getting Started with Node, Express and Api
            </li>
            <li className="ml-10 mb-2">
              Module 64: Mongodb, database integration, CRUD
            </li>
            <li className="ml-10 mb-2">
              Module 65: Genius Car Node Mongo CRUD Recap
            </li>
            <li className="ml-10 mb-2">
              Module 66: E-commerce site Node and Mongodb integration
            </li>
            <li className="ml-10 mb-2">
              Module 68: Backend Database Milestone Assignment
            </li>
            <li className="ml-10 mb-2">
              Milestone 12: Final Project (Complete Website)
            </li>
            <li className="ml-10 mb-2">
              Module 69: Final Project Part-I (Home page)
            </li>
            <li className="ml-10 mb-2">
              Module 70: Final Project Part-2 (Appointment)
            </li>
            <li className="ml-10 mb-2">
              Module 71: Final Project Part-3 (Auth Recap)
            </li>
            <li className="ml-10 mb-2">
              Module 72: Final Project Part-4 (Dashboard)
            </li>
            <li className="ml-10 mb-2">
              Module 73: Final Project Part-5 (Secure Admin)
            </li>
            <li className="ml-10 mb-2">
              Module 74: Complete Website Assignment 12
            </li>
            <li className="ml-10 mb-2">
              Milestone 13: Intermediate Level React
            </li>
            <li className="ml-10 mb-2">
              Module: 75: Payment gateway Stripe Integration
            </li>
            <li className="ml-10 mb-2">
              Module 76: Image Upload, Live Site Deploy, React Router V6
            </li>
            <li className="ml-10 mb-2">
              Module 77: Introduction React Native, Next JS, Class Components
            </li>
            <li className="ml-10 mb-2"> Milestone 14: Interview and Hiring</li>
            <li className="ml-10 mb-2">
              Module 78: Data Structure, Algorithm, OOP, Problem Solving
            </li>
            <li className="ml-10 mb-2">
              Module 79: Interview Preparation and Get Ready to be hired
            </li>
            <li className="ml-10 mb-2">
              Module 80: Last Module Grow as a web Developer
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
