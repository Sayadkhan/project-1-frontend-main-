import { Link } from "react-router-dom";

const HomePage = () => {
  const bgImage = "../../../2.png";

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-end items-start text-white px-8 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            VENDOR IS PROGRESSING <br /> FAST TO A NEW FUTURE
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6 leading-relaxed">
            A proud Saudi project for the world – happening now.
          </p>
          <Link
            to={"/register"}
            className="bg-white text-black font-bold py-3 px-6 rounded shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
