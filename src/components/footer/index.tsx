const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl text-white">
                Subscribe our newsletter to get update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 border rounded-md bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Subscribe
                </button>
              </div>
            </div>

            <div></div>

            <div>
              <p className="font-semibold text-white">Quick Links</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline">
                  Home
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline">
                  About Us
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline">
                  Services
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 md:my-8 border-gray-500" />

          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-14" src="/logo.png" alt="" />
            </a>

            <div className="flex -mx-2">
              <a
                href="https://www.instagram.com/bytebuilder.io/"
                className="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
                aria-label="Instagram"
                target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
