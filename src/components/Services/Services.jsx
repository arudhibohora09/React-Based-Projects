import React from 'react';
import { motion } from 'framer-motion';
import Plan1 from '../../assets/plan1.jpg';
import Plan2 from '../../assets/plan2.jpg';
import Plan3 from '../../assets/plan3.jpg';
import Plan4 from '../../assets/plan4.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Animal Husbandry',
    image: Plan1,
    description: 'Experience farm life with our friendly animals and guided tours.',
  },
  {
    id: 2,
    title: 'Child Park',
    image: Plan2,
    description: 'A fun and safe space for kids to play, learn, and explore nature.',
  },
  {
    id: 3,
    title: 'Bonfire',
    image: Plan3,
    description: 'Enjoy cozy evenings by the fire with music, snacks, and great company.',
  },
  {
    id: 4,
    title: 'Cafe',
    image: Plan4,
    description: 'Relax and refresh with our delicious food and farm-style drinks.',
  },
];

const Services = () => {
  return (
    <div className="container my-16 space-y-10">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="text-center space-y-2 mx-auto max-w-lg"
      >
        <motion.h1 className="text-4xl font-bold font-serif text-green-600">
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-lightGray text-sm opacity-70"
        >
          Explore the unique experiences we offer for families, friends, and nature lovers.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4">
        {servicesData.map((service) => (
          <motion.div
         
          initial="hidden"
          whileInView={"visible" }
          viewport={{  amount: 0.8 }}
         
            key={service.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center space-y-2">
              <h3 className="text-xl font-semibold text-green-700">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
