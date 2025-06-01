import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Shirt, Scissors, CheckCircle, PenTool, Ship, Palette, Box } from 'lucide-react';
import { useStaggerAnimation } from '../../hooks/useScrollAnimation';

const ServicesSection: React.FC = () => {
  const { ref, controls, variants, childVariants } = useStaggerAnimation();
  
  const services = [
    {
      icon: <Palette size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Desain & Pengembangan Garmen',
      description: 'Layanan desain profesional dan pengembangan pola untuk mewujudkan konsep Anda menjadi produk nyata.'
    },
    {
      icon: <Box size={32} className="text-primary-600 dark:text-primary-400" />,
      title: ' Pengadaan Kain',
      description: 'Akses ke kain dan bahan premium dari pemasok terpercaya, lokal maupun internasional.'
    },
    {
      icon: <Shirt size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Produksi Garmen',
      description: 'Produksi penuh mulai dari pembuatan pola hingga pembuatan massal kaos, celana, hoodie, dan jaket.'
    },
    {
      icon: <Scissors size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Kancing & Finishing',
      description: 'Pemasangan kancing yang presisi, bordir, sablon, dan detail akhir untuk menyempurnakan setiap produk.'
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Kontrol Kualitas',
      description: 'Pemeriksaan kualitas bertahap dan ketat untuk memastikan setiap produk memenuhi standar industri.'
    },
    {
      icon: <Ship size={32} className="text-primary-600 dark:text-primary-400" />,
      title: ' Logistik & Rantai Pasok',
      description: 'Layanan ekspor lengkap termasuk dokumentasi, pengemasan, dan pengiriman ke seluruh dunia.'
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionTitle
          title="Layanan Kami"
          subtitle="Kami menyediakan layanan manufaktur garmen lengkap dari desain hingga pengiriman."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
                <div className="mb-4 md:mb-0 md:mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;