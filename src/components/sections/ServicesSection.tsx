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
      title: 'Network Design & Planning',
      description: 'We design and plan secure, scalable, and efficient network infrastructures that match your business vision.'
    },
    {
      icon: <Box size={32} className="text-primary-600 dark:text-primary-400" />,
      title: ' Backup & Data Protection',
      description: 'We implement reliable backup and disaster recovery solutions to keep your business data safe.س'
    },
    {
      icon: <Shirt size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Hardware & Infrastructure Setup',
      description: 'From servers to structured cabling, we ensure high-quality installation for stable performance.'
    },
    {
      icon: <Scissors size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Software & ERP Solutions',
      description: 'We develop and deploy administrative, financial, and custom software systems for better management.'
    },
    {
      icon: <CheckCircle size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Kontrol Kualitas',
      description: 'Pemeriksaan kualitas bertahap dan ketat untuk memastikan setiap produk memenuhi standar industri.'
    },
    {
      icon: <Ship size={32} className="text-primary-600 dark:text-primary-400" />,
      title: 'Data Center & Network Optimization',
      description: 'We build, upgrade, and optimize data centers and networks for maximum efficiency and reliability.'
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">

    </section>
  );
};

export default ServicesSection;