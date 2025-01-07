const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* <img src="/logo.png" alt="Logo" className="w-12 h-12 object-cover" /> */}
          <span className="text-white font-bold text-lg">IH</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            ABOUT
          </a>
          <a
            href="#regions"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            REGIONS
          </a>
          <a
            href="#business"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            OUR BUSINESS
          </a>
          <a
            href="#news"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            NEWS
          </a>
          <a
            href="#invest"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            INVEST
          </a>
          <a
            href="#careers"
            className="text-white text-sm hover:text-gray-300 transition"
          >
            CAREERS
          </a>
        </div>
        <div></div>
        {/* Language Selector and Button */}
        <div className="flex items-center space-x-4">
          <select
            className="bg-transparent text-white border border-white rounded px-2 py-1 text-sm focus:outline-none"
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
          </select>
          <button className="bg-white text-black font-bold px-4 py-2 rounded">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
