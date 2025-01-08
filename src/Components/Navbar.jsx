import React, { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MyPortfolio from "./MyPortfolio";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Navbar = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setisMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Section with logo */}
      <div className="relative">
        <img
          className="h-9 rounded-full mt-4 mx-2 items-center cursor-pointer "
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG&size=690:388"
        />
        <h1 className="absolute top-0 mx-24 mt-2 items-center text-black font-bold ">
          Greata{" "}
        </h1>
        <h1 className="absolute top-0 mx-40 mt-2 items-center">Mae Events</h1>
      </div>

      {/* Navbar Section */}
      <Router>
        <nav>
          {/* Desktop Menu */}
          <ul className="justify-end gap-16 absolute top-0 right-1 mt-4 items-center font-bold md:flex hidden">
            <li className="hover:text-orange-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/myportfolio">MyPortfolio</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/testimonial">Testimonial</NavLink>
            </li>
            <li className="hover:text-orange-600">
              <NavLink to="/contact">Contact</NavLink>
            </li>

            {/* "Work With Me" button placed after the "Contact" link */}
            <button className="flex border bg-black text-white px-7 rounded-2xl items-center justify-start gap-2 p-2 hover:text-blue-500">
              <span>Work With Me</span>
              <BsArrowUpRightCircleFill className="ml-2 text-2xl text-orange-600 hover:text-yellow-400 " />
            </button>
          </ul>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="absolute top-16 right-0 w-full bg-green-600 text-white p-4 md:hidden flex flex-col gap-4">
              <li className="hover:text-orange-600">
                <NavLink to="/" onClick={() => setisMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li className="hover:text-orange-600">
                <NavLink to="/about" onClick={() => setisMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              <li className="hover:text-orange-600">
                <NavLink to="/myportfolio" onClick={() => setisMenuOpen(false)}>
                  MyPortfolio
                </NavLink>
              </li>
              <li className="hover:text-orange-600">
                <NavLink to="/testimonial" onClick={() => setisMenuOpen(false)}>
                  Testimonial
                </NavLink>
              </li>
              <li className="hover:text-orange-600">
                <NavLink to="/contact" onClick={() => setisMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>
              {/* Mobile version of "Work With Me" button */}
              <button
                className="flex border bg-black text-white px-7 rounded-2xl items-center justify-start gap-2 p-2 hover:text-blue-500"
                onClick={() => setisMenuOpen(false)} // Close the menu after clicking
              >
                <span>Work With Me</span>
                <BsArrowUpRightCircleFill className="ml-2 text-2xl text-orange-600 hover:text-yellow-400 " />
              </button>
            </ul>
          )}

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-4xl flex right-2 mt-2 items-center px-2 absolute top-2"
          >
            &#8801;
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
