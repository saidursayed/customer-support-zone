import React from "react";
import Container from "../Container/Container";

const Navbar = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="navbar md:py-4 flex justify-between px-4 md:px-0">
          <div className="flex items-center gap-1">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 md:h-8 w-5 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 md:mt-6 w-52 p-2 shadow"
              >
                <li>
                  <a className="text-base" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-base" href="#">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-base" href="#">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="text-base" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-base" href="#">
                    Download
                  </a>
                </li>
                <li>
                  <a className="text-base" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a className="md:text-2xl text-[#130b2d] font-bold">
              CS — Ticket System
            </a>
          </div>
          <div className="flex md:gap-4">
            <ul className="menu menu-horizontal px-1 hidden lg:flex text-[#000000e6] text-base">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div>
              <button className=" bg-linear-[125deg,#632EE3,#9F62F2] font-semibold text-white px-4 py-2 md:py-3 rounded-sm hover:cursor-pointer">
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
