import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const ProductsSection: React.FC = () => {
  const { ref, controls, variants, childVariants } = useStaggerAnimation(0.1, 0.2, 0.15);

  const products = [
    {
      image: 'https://burst.shopifycdn.com/photos/tech-meeting-flatlay.jpg?width=925&format=pjpg&exif=0&iptc=0',
      title: 'Proses Produksi Awal',
      category: 'Shirts'
    },
    {
      image: 'https://burst.shopifycdn.com/photos/network-server.jpg?width=925&format=pjpg&exif=0&iptc=0',
      title: 'Pemeriksaan & Penyortiran',
      category: 'Shirts'
    },
    {
      image: 'https://burst.shopifycdn.com/photos/woman-hands-tech-developer-laptop.jpg?width=925&format=pjpg&exif=0&iptc=0',
      title: 'Penyusunan Produk',
      category: 'Shirts'
    },
    {
      image: 'https://burst.shopifycdn.com/photos/software-programming-plan.jpg?width=373&format=pjpg&exif=0&iptc=0',
      title: 'Pengemasan Produk',
      category: 'Shirts'
    },
    {
      image: 'https://burst.shopifycdn.com/photos/business-owner-working-on-online-store.jpg?width=373&format=pjpg&exif=0&iptc=0',
      title: 'Siap Kirin Ke Klien',
      category: 'Shirts'
    },
    {
      image: 'https://burst.shopifycdn.com/photos/office-computer-screen.jpg?width=373&format=pjpg&exif=0&iptc=0',
      title: 'Produk Jadi Celana',
      category: 'Jeans'
    }
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionTitle
        
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