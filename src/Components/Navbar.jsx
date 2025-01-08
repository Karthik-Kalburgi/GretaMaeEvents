import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-9 rounded-full mt-4 mx-2 items-center"
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202307/why-design-thinking-is-important-in-todays-job-industries-132433-16x9.jpg?VersionId=r3DkuIlkjSZI0KClaN79ksVBKui34xNG&size=690:388"
        />
        <h1 className="absolute top-0 mx-24 mt-2 items-center text-black font-bold ">
          Greata{" "}
        </h1>
        <h1 className="absolute top-0 mx-40 mt-2 items-center">Mae Events</h1>
      </div>
      <nav>
        <ul className=" justify-end gap-16 absolute top-0 right-1 mt-4 items-center font-bold md:flex hidden  ">
          <li className="hover:text-orange-600">Home</li>
          <li className="hover:text-orange-600">About Me</li>
          <li className="hover:text-orange-600">My Portfolio</li>
          <li className="hover:text-orange-600">Testimonials</li>
          <li className="hover:text-orange-600">Contract</li>

          <button className=" flex border bg-black text-white px-7 rounded-2xl items-center justify-start gap-2 p-2">
            <span >Work With Me</span>
            <BsArrowUpRightCircleFill  className="ml-2 text-2xl text-orange-600  hover:text-yellow-400 " />
          </button>
        </ul>
        <div className="md:hidden ">
        <a className='text-4xl flex right-2 mt-2 items-center px-2 absolute top-2  ' href='#'>&#8801;</a>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
