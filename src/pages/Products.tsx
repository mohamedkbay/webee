import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ProductsSection from '../components/sections/ProductsSection';

const Products: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Products | PT Doori Lestari Garment";
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
              title="Portofolio Produk Kami"
              subtitle="Jelajahi beragam koleksi pakaian berkualitas tinggi yang dibuat untuk merek global."
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
            title="Kategori Produk"
            subtitle="Kami mengkhususkan diri dalam berbagai kategori pakaian untuk memenuhi permintaan pasar yang beragam."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Shirts & Tops', count: '100+ Styles' },
              { title: 'Pants & Bottoms', count: '80+ Styles' },
              { title: 'Outerwear & Jackets', count: '50+ Styles' },
              { title: 'Hoodies & Sweatshirts', count: '60+ Styles' },
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
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Kapasitas Produksi Kami"
            subtitle="Kami mempunyai kemampuan untuk menangani pesanan dalam jumlah kecil dan produksi berskala besar."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Monthly Capacity', value: '50,000+ Units' },
              { title: 'Production Lines', value: '15 Lines' },
              { title: 'Minimum Order', value: '500 Units/Style' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-50 dark:bg-gray-800 p-8 rounded-lg text-center"
              >
                <h3 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;