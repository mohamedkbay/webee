import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Target, EyeIcon, Heart } from 'lucide-react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const animation = useScrollAnimation();
  const staggerAnimation = useStaggerAnimation();

  const values = [
    { 
      icon: <Target size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Visi',
      description: 'Menjadi mitra terpercaya dalam industri garmen yang mampu memberikan solusi produksi berkualitas tinggi, tepat waktu, dan efisien bagi brand lokal maupun internasional.'
    },
    { 
      icon: <EyeIcon size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Misi',
      description: 'Memberikan solusi produksi garmen yang profesional dan fleksibel kepada brand atau perusahaan retail, dengan mengutamakan ketepatan waktu, mutu produk, dan kepuasan mitra kerja dalam setiap proses kerja sama.'
    },
    { 
      icon: <Heart size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Values',
      description: 'Kami menjunjung tinggi integritas, kualitas, dan ketepatan waktu dalam setiap proses kerja, serta berkomitmen membangun kemitraan jangka panjang yang saling menguntungkan.'
    }
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={animation.ref}
          initial="hidden"
          animate={animation.controls}
          variants={animation.variants}
        >
          <SectionTitle
            title="Mewujudkan Fashion dengan Dedikasi"
            subtitle="PT Doori Lestari Garment adalah produsen garmen terpercaya yang berbasis di Indonesia, menyediakan pakaian berkualitas tinggi untuk kebutuhan ekspor global."
          />
        </motion.div>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p 
            ref={animation.ref}
            initial="hidden"
            animate={animation.controls}
            variants={animation.variants}
            className="text-gray-700 dark:text-gray-300 text-center"
          >
            Dengan konsistensi dan perhatian pada detail, kami menjembatani keterampilan tangan lokal Indonesia dengan tren mode dunia. Fasilitas modern dan tenaga kerja terampil kami memastikan setiap produk memenuhi standar kualitas internasional.
          </motion.p>
        </div>

        <motion.div
          ref={staggerAnimation.ref}
          initial="hidden"
          animate={staggerAnimation.controls}
          variants={staggerAnimation.variants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerAnimation.childVariants}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;