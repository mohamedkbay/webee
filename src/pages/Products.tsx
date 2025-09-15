import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProductsSection from '../components/sections/ProductsSection';

const Products: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Tech Shield";
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
              title="Our Solutions"
              subtitle="Discover the services and technologies we deliver to businesses worldwide"
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Categories Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Our Expertise"
            subtitle="Take a look at the tailored solutions we provide to businesses across different industries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Warchapro', count: '30 clients' },
              { title: 'Network Solutions', count: '33 clients' },
              { title: 'Cloud Services', count: '101 clients' },
              { title: 'Helpdesk', count: '300 clients' },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      
    </div>
  );
};

export default Products;