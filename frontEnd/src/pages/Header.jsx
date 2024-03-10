import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons/logo.png";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
            <span className="text-black hover:cursor-pointer text-xl mb-1">Better Care</span>
          </Link>
          <div className="flex items-center lg:order-2">
            {/* <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 text-lg-transition:hover focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link> */}
            {/* <Link
              to="signup"
              className="text-white bg-[#8333ea] hover:bg-[#8333ea] hover:scale-1 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link> */}
            <Link
              to="/"
              className="text-white bg-teal-600 hover:bg-teal-800 hover:scale-1 focus:ring-2 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Logout
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-teal-600"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-800 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-teal-600"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-800 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-teal-600"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-800 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li></li>
              {/* <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-500"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
