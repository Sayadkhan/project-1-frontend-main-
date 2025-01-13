import { Link } from "react-router-dom";
import { AnimatedCard, AnimatedSection } from "../components/AnimatedSection";
import {
  FaHeadset,
  FaCreditCard,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage = () => {
  const bgImage = "../../../2.png";

  const services = [
    {
      icon: <FaRocket className="w-12 h-12 text-indigo-600" />,
      title: "Premium Launch",
      description:
        "Get your business off the ground with our premium launch services",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-indigo-600" />,
      title: "Growth Strategy",
      description: "Custom strategies to scale your business effectively",
    },
    {
      icon: <FaTools className="w-12 h-12 text-indigo-600" />,
      title: "Technical Support",
      description: "24/7 technical assistance for all your needs",
    },
  ];

  const features = [
    {
      icon: <FaHeadset className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your peace of mind",
    },
    {
      icon: <FaCreditCard className="w-8 h-8 text-indigo-600" />,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising quality",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 text-indigo-600" />,
      title: "Secure Service",
      description: "Your security is our top priority",
    },
  ];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-center bg-contain bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="container mx-auto relative flex flex-col justify-center items-center text-white px-8 text-center">
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
            Registration
          </Link>
        </div>
      </section>

      <section>
        <div className="min-h-screen">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle at center, white 0%, transparent 70%)",
              }}
            />
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
              >
                Our Premium Services
              </motion.h1>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-purple-100"
              >
                Elevate your business with our comprehensive solutions
              </motion.p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <AnimatedSection className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.2}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mt-6 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Why Choose Us */}
          <div className="bg-gray-50 py-24">
            <AnimatedSection className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                  <AnimatedCard
                    key={index}
                    delay={index * 0.2}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-indigo-50 p-4 rounded-full mb-6 group-hover:bg-indigo-100 transition-colors duration-300"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* CTA Section */}
          <AnimatedSection className="bg-indigo-600 text-white py-24">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-12 text-indigo-100">
                  Contact us today to learn more about our premium services
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
