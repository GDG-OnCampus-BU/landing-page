import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar(props) {
  const public_path = process.env.NEXT_PUBLIC_PUBLIC_PATH
  const [visible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPosition) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const getButtonId = (event) => {
    return event.target.id;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-20 top-0 start-0  transition-all duration-300 ease-in-out ${visible ? "transform translate-y-0" : "transform -translate-y-full"}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={public_path + "/assets/logo_gdg.png"}
              alt="GDG Logo"
              width={32}
              height={32}
            />

        <span className="self-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 whitespace-nowrap dark:text-white shadow-lg">
          GDG Bennett University
        </span>

          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full text-sm px-6 py-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg shadow-blue-500/30 dark:shadow-blue-800/40"
          >
            Get Started
          </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
              <button
                  onClick={props.scrollToHome}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={props.scrollToABout}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={props.scrollToServices}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
