import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

const ClientsSection: React.FC = () => {
  const animation = useScrollAnimation();
  const { ref, controls, variants, childVariants } = useStaggerAnimation(0.1, 0.1, 0.1);

  // Using dummy logos via background color blocks for placeholder purposes
  const clients = [
    { name: 'Uniqlo ', color: 'bg-gray-200 dark:bg-gray-700' },
    { name: 'H&M', color: 'bg-gray-200 dark:bg-gray-700' },
    { name: 'Zara ', color: 'bg-gray-200 dark:bg-gray-700' },
    { name: 'Mango ', color: 'bg-gray-200 dark:bg-gray-700' },
    { name: 'Marks & Spencer', color: 'bg-gray-200 dark:bg-gray-700' },
    { name: 'Cotton On', color: 'bg-gray-200 dark:bg-gray-700' },
  ];

  const regions = [
    { name: 'Asia', countries: ['Japan', 'South Korea', 'Singapore', 'Malaysia', "Thailand", "Vietnam"] },
    { name: 'Europe', countries: ['Germany', 'France', 'United Kingdom', 'Italy'] },
    { name: 'North America', countries: ['United States', 'Canada'] },
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={animation.ref}
          initial="hidden"
          animate={animation.controls}
          variants={animation.variants}
        >
          <SectionTitle
            title="Trusted by Global Brands"
            subtitle="Our garments are exported to clients in Asia, Europe, and North America.
                      With a proven track record of quality and reliability, PT Doori Lestari Garment has become a trusted manufacturing partner for global fashion brands. Our commitment to precision, on-time delivery, and sustainable production practices allows us to consistently meet the standards of leading brands across international markets. From casual wear to premium collections, our craftsmanship reflects excellence in every stitch."
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className={`${client.color} rounded-lg h-24 flex items-center justify-center shadow-sm`}
            >
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {region.name}
              </h3>
              <ul className="space-y-2">
                {region.countries.map((country, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-400">
                    {country}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;