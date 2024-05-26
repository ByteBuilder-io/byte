import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Nav() {
  useEffect(() => {
    // Burger menus
    const handleBurgerClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => {
        menu.classList.toggle("hidden");
      });
    };

    const burgerButtons = document.querySelectorAll(".navbar-burger");
    burgerButtons.forEach((button) => {
      button.addEventListener("click", handleBurgerClick);
    });

    // Close menu
    const handleCloseClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => {
        menu.classList.toggle("hidden");
      });
    };

    const closeButtons = document.querySelectorAll(
      ".navbar-close, .navbar-backdrop"
    );
    closeButtons.forEach((button) => {
      button.addEventListener("click", handleCloseClick);
    });

    // Cleanup
    return () => {
      burgerButtons.forEach((button) => {
        button.removeEventListener("click", handleBurgerClick);
      });
      closeButtons.forEach((button) => {
        button.removeEventListener("click", handleCloseClick);
      });
    };
  }, []); // Run only once after initial render

  return (
    <div className="fixed w-full z-50">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
        <a className="text-3xl font-bold leading-none" href="/">
          <img src="/logo.png" width={"200px"} />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-green-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-white hover:text-green-500" href="/">
              Home
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-sm text-white hover:text-green-500"
              href="/about-us">
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-white hover:text-green-500" href="#">
              Services
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block py-2 px-6 hover:bg-[#72bf80] text-sm text-white font-bold rounded-xl transition duration-200"
          href="/contact">
          Contact
        </a>
      </nav>
      <div className="navbar-menu relative z-50 hidden bg-black">
        <div className="navbar-backdrop fixed inset-0 b opacity-25 bg-black"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img src="/logo.png" width={"200px"} />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-white cursor-pointer hover:text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="/about-us">
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-black text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="/contact">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
