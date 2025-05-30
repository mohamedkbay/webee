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
      title: 'Mission',
      description: 'To connect Indonesian craftsmanship with global fashion trends, delivering high-quality garments that meet international standards.'
    },
    { 
      icon: <EyeIcon size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Vision',
      description: 'To become a leading garment manufacturer recognized globally for quality, innovation, and sustainable production practices.'
    },
    { 
      icon: <Heart size={28} className="text-primary-600 dark:text-primary-400" />,
      title: 'Values',
      description: 'Quality, Integrity, Innovation, Sustainability, and Respect for our people, partners, and the environment.'
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
            title="Crafting Fashion with Passion"
            subtitle="PT Doori Lestari Garment is a trusted garment manufacturer based in Indonesia, producing high-quality clothing for global export."
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
            With a commitment to consistency and detail, we connect Indonesian craftsmanship with worldwide fashion trends. Our state-of-the-art facilities and skilled workforce ensure that every garment meets international quality standards.
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