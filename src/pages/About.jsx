import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "../components/AnimatedSection";

function About() {
  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
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
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-purple-100"
          >
            Building the future of digital solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story */}
      <AnimatedSection className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Founded in 2020, we started with a vision to transform how
            businesses approach digital solutions. Our journey began with a
            small team of passionate innovators and has grown into a dynamic
            force in the industry.
          </p>
          <p>
            Today, we continue to push boundaries and create innovative
            solutions that help businesses thrive in the digital age.
          </p>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedCard className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-indigo-50 p-4 rounded-full mr-6"
                >
                  <FaLightbulb className="w-8 h-8 text-indigo-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower businesses with innovative digital solutions that
                    drive growth and success in an ever-evolving digital
                    landscape.
                  </p>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-indigo-50 p-4 rounded-full mr-6"
                >
                  <FaHandshake className="w-8 h-8 text-indigo-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading force in digital transformation, setting
                    new standards for innovation and excellence in the industry.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <AnimatedSection className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <AnimatedCard key={index} delay={index * 0.2} className="group">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
