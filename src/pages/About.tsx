import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/sections/AboutSection';
import SectionTitle from '../components/ui/SectionTitle';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | PT Doori Lestari Garment";
  }, []);

  const teamMembers = [
    {
      name: "Kwun Hun Ik",
      position: "Chief Executive Officer",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "With over 20 years of experience in the garment industry, Sarah leads our company's strategic vision and global expansion."
    },
    {
      name: "Joon Tae Kim",
      position: "Head of Production",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "David oversees all manufacturing operations, ensuring the highest quality standards across our production lines."
    },
    {
      name: "Linda Sanjaya",
      position: "Marketing Director",
      image: "https://images.pexels.com/photos/2381068/pexels-photo-2381068.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Linda drives our global marketing strategy and client relationships, expanding our presence in international markets."
    }
  ];

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
              title="Tentang PT Doori Lestari Garment"
              subtitle="Kenali perjalanan kami, tim di balik produksi, dan komitmen kami terhadap kualitas terbaik dalam industri garmen."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Company History */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Perjalanan Kami"
            subtitle="Dari awal yang sederhana hingga menjadi mitra terpercaya bagi brand global."
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <p>
                Didirikan pada tahun 2010, PT Doori Lestari Garment memulai perjalanan sebagai workshop kecil dengan hanya 20 penjahit terampil. Kini, kami telah berkembang menjadi fasilitas manufaktur skala penuh yang mempekerjakan lebih dari 200 tenaga kerja ahli dan memproduksi ribuan pakaian setiap bulan untuk ekspor ke berbagai negara.
              </p>
              <p>
                Pertumbuhan kami didasarkan pada kualitas, keandalan, dan hubungan kuat dengan para klien. Kami terus berinvestasi dalam peralatan modern, menyempurnakan proses produksi, dan meningkatkan kapasitas kami untuk memenuhi kebutuhan industri fashion yang terus berkembang.
              </p>
              <p>
                Sepanjang perjalanan ini, kami selalu berkomitmen pada praktik produksi yang etis, standar ketenagakerjaan yang adil, dan metode produksi berkelanjutan. Kami percaya bahwa praktik bisnis yang bertanggung jawab bukan hanya etis—tetapi juga strategi bisnis yang baik.
              </p>
              <p>
                Melangkah ke masa depan, kami tetap setia pada prinsip-prinsip awal kami, sembari terbuka terhadap inovasi dan teknologi baru yang memungkinkan kami memberikan nilai tambah yang lebih besar bagi klien.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Tim Kepemimpinan Kami"
            subtitle="Temui orang-orang yang mendorong visi misi kami ke depan."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-64 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;