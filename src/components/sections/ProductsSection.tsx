import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const ProductsSection: React.FC = () => {
  const { ref, controls, variants, childVariants } = useStaggerAnimation(0.1, 0.2, 0.15);

  const products = [
    {
      image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Minimal Look',
      category: 'Shirts'
    },
    {
      image: 'https://images.pexels.com/photos/6311384/pexels-photo-6311384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Streetwear Series',
      category: 'Hoodies'
    },
    {
      image: 'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Urban Collection',
      category: 'Jackets'
    },
    {
      image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Business Casual',
      category: 'Formal'
    },
    {
      image: 'https://images.pexels.com/photos/4440535/pexels-photo-4440535.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Summer Essentials',
      category: 'T-Shirts'
    },
    {
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Premium Denim',
      category: 'Pants'
    }
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
          title="Our Apparel Line"
          subtitle="Explore a range of sample garments we've produced for our clients around the world."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white text-sm font-medium bg-primary-600 px-3 py-1 rounded-full inline-block mb-2 w-fit">
                    {product.category}
                  </span>
                  <h3 className="text-white text-xl font-semibold">{product.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;