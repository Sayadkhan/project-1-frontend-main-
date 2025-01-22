// import { Link } from "react-router-dom";
// import { AnimatedCard, AnimatedSection } from "../components/AnimatedSection";
// import {
//   FaHeadset,
//   FaCreditCard,
//   FaRocket,
//   FaChartLine,
//   FaShieldAlt,
//   FaTools,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const HomePage = () => {
//   const bgImage = "../../../2.png";

//   const services = [
//     {
//       icon: <FaRocket className="w-12 h-12 text-indigo-600" />,
//       title: "Premium Launch",
//       description:
//         "Get your business off the ground with our premium launch services",
//     },
//     {
//       icon: <FaChartLine className="w-12 h-12 text-indigo-600" />,
//       title: "Growth Strategy",
//       description: "Custom strategies to scale your business effectively",
//     },
//     {
//       icon: <FaTools className="w-12 h-12 text-indigo-600" />,
//       title: "Technical Support",
//       description: "24/7 technical assistance for all your needs",
//     },
//   ];

//   const features = [
//     {
//       icon: <FaHeadset className="w-8 h-8 text-indigo-600" />,
//       title: "24/7 Support",
//       description: "Round-the-clock assistance for your peace of mind",
//     },
//     {
//       icon: <FaCreditCard className="w-8 h-8 text-indigo-600" />,
//       title: "Affordable Pricing",
//       description: "Competitive rates without compromising quality",
//     },
//     {
//       icon: <FaShieldAlt className="w-8 h-8 text-indigo-600" />,
//       title: "Secure Service",
//       description: "Your security is our top priority",
//     },
//   ];

//   return (
//     <div className="relative z-10">
//       {/* Hero Section */}
//       <section
//         className="relative h-screen bg-center bg-contain bg-no-repeat flex items-center justify-center"
//         style={{ backgroundImage: `url('${bgImage}')` }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Hero Content */}
//         <div className="container mx-auto relative flex flex-col justify-center items-center text-white px-8 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
//             VENDOR IS PROGRESSING <br /> FAST TO A NEW FUTURE
//           </h1>
//           <p className="text-lg md:text-xl max-w-xl mb-6 leading-relaxed">
//             A proud Saudi project for the world – happening now.
//           </p>
//           <Link
//             to={"/register"}
//             className="bg-white text-black font-bold py-3 px-6 rounded shadow-lg hover:bg-gray-200 transition"
//           >
//             Registration
//           </Link>
//         </div>
//       </section>

//       <section>
//         <div className="min-h-screen">
//           {/* Hero Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32"
//           >
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 rotate: [0, 180, 360],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="absolute top-0 left-0 w-full h-full opacity-10"
//               style={{
//                 background:
//                   "radial-gradient(circle at center, white 0%, transparent 70%)",
//               }}
//             />
//             <div className="container mx-auto px-4 text-center relative z-10">
//               <motion.h1
//                 initial={{ y: -50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
//               >
//                 Our Premium Services
//               </motion.h1>
//               <motion.p
//                 initial={{ y: 50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="text-xl text-purple-100"
//               >
//                 Elevate your business with our comprehensive solutions
//               </motion.p>
//             </div>
//           </motion.div>

//           {/* Services Grid */}
//           <AnimatedSection className="container mx-auto px-4 py-24">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <AnimatedCard
//                   key={index}
//                   delay={index * 0.2}
//                   className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
//                 >
//                   <div className="flex flex-col items-center text-center">
//                     <motion.div
//                       whileHover={{ rotate: 360 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {service.icon}
//                     </motion.div>
//                     <h3 className="text-2xl font-bold mt-6 mb-3">
//                       {service.title}
//                     </h3>
//                     <p className="text-gray-600">{service.description}</p>
//                   </div>
//                 </AnimatedCard>
//               ))}
//             </div>
//           </AnimatedSection>

//           {/* Why Choose Us */}
//           <div className="bg-gray-50 py-24">
//             <AnimatedSection className="container mx-auto px-4">
//               <h2 className="text-4xl font-bold text-center mb-16">
//                 Why Choose Us
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                 {features.map((feature, index) => (
//                   <AnimatedCard
//                     key={index}
//                     delay={index * 0.2}
//                     className="flex flex-col items-center text-center group"
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.2 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="bg-indigo-50 p-4 rounded-full mb-6 group-hover:bg-indigo-100 transition-colors duration-300"
//                     >
//                       {feature.icon}
//                     </motion.div>
//                     <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </AnimatedCard>
//                 ))}
//               </div>
//             </AnimatedSection>
//           </div>

//           {/* CTA Section */}
//           <AnimatedSection className="bg-indigo-600 text-white py-24">
//             <div className="container mx-auto px-4 text-center">
//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 whileInView={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h2 className="text-4xl font-bold mb-6">
//                   Ready to Get Started?
//                 </h2>
//                 <p className="text-xl mb-12 text-indigo-100">
//                   Contact us today to learn more about our premium services
//                 </p>
//                 <motion.a
//                   href="/contact"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Contact Us
//                 </motion.a>
//               </motion.div>
//             </div>
//           </AnimatedSection>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;
import { motion } from "framer-motion";
import {
  Rocket,
  LineChart,
  Wrench,
  ArrowRight,
  Users,
  Globe,
} from "lucide-react";

function App() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Premium Launch",
      description:
        "Get your business off the ground with our premium launch services",
    },
    {
      icon: <LineChart className="w-8 h-8 text-purple-600" />,
      title: "Growth Strategy",
      description: "Custom strategies to scale your business effectively",
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-600" />,
      title: "Technical Support",
      description: "24/7 technical assistance for all your needs",
    },
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden  min-h-screen ">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')]  bg-cover bg-center opacity-80" />
        <div className="relative container mx-auto px-4 py-32 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6">
              Shaping The Future Of Digital Business
            </h1>
            <p className="text-xl text-black mb-8">
              A proud Saudi project revolutionizing the way businesses operate
              in the digital age.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="text-center text-white"
                >
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elevate your business with our comprehensive solutions designed
              for the modern digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-gray-600 mb-8">
                We combine innovation with reliability to deliver exceptional
                results for our clients.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Global Reach</h3>
                    <p className="text-gray-600">
                      Serving clients worldwide with localized solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-600">
                      Dedicated professionals with industry expertise
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-purple-600 text-white p-8 rounded-xl">
                <p className="text-2xl font-bold">15+</p>
                <p>Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-purple-100 mb-8">
              Join thousands of satisfied clients who have elevated their
              business with our solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold inline-flex items-center group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
