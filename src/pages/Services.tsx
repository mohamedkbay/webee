import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ServicesSection from '../components/sections/ServicesSection';

const Services: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Services | PT Doori Lestari Garment";
  }, []);

  return (
    <div className="pt-16 mt-10">
      {/* Header Section */}
      <section className="bg-primary-50 dark:bg-gray-800 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Our Services"
              subtitle="Comprehensive garment manufacturing services tailored to your needs."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Manufacturing Process */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Manufacturing Process"
            subtitle="From concept to finished product, we handle every step with precision and care."
          />

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-800"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">1. Design & Pattern Making</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We collaborate with your design team or provide design services to create patterns that align with your vision.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">2. Sampling & Prototyping</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We create samples for approval before proceeding to mass production, ensuring your specifications are met.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">3. Fabric Sourcing & Cutting</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We source high-quality fabrics and precisely cut them according to the approved patterns.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">4. Sewing & Assembly</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our skilled tailors assemble the garments with precision and attention to detail.
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">5. Quality Control</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Every garment undergoes rigorous quality checks to ensure it meets our high standards.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
              </motion.div>

              {/* Step 6 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:flex items-center"
              >
                <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900"></div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">6. Packaging & Shipping</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We carefully package the finished products and manage all export logistics to ensure safe delivery.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;