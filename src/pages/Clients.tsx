import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ClientsSection from '../components/sections/ClientsSection';
import { MapPinIcon } from 'lucide-react';

const Clients: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Clients | PT Doori Lestari Garment";
  }, []);

  const testimonials = [
    {
      name: "James Wilson",
      company: "Fashion Forward Inc.",
      quote: "Working with PT Doori Lestari has been a game-changer for our brand. Their attention to detail and commitment to quality has helped us deliver premium products to our customers consistently.",
      location: "United States"
    },
    {
      name: "Sophie Laurent",
      company: "Style Moderne",
      quote: "The team at PT Doori Lestari understands our aesthetic perfectly. Their craftsmanship and ability to translate our designs into high-quality garments has been invaluable to our growth.",
      location: "France"
    },
    {
      name: "Hiroshi Tanaka",
      company: "Urban Threads Co.",
      quote: "We've been partnering with PT Doori Lestari for over 5 years, and they've consistently exceeded our expectations. Their quality control and on-time delivery are exceptional.",
      location: "Japan"
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
              title="Klien Global Kami"
              subtitle="Kami bangga menjadi mitra bagi brand-brand visioner dari berbagai negara. Di PT Doori Lestari Garment, kami percaya inovasi dan kolaborasi adalah kunci untuk tetap unggul di industri fashion yang terus berkembang. Dengan bekerja sama dengan brand yang mengutamakan keberlanjutan, teknologi, dan praktik etis, kami mewujudkan ide-ide kreatif menjadi produk pakaian berkualitas tinggi yang berdampak secara global. Kemitraan kami mencerminkan visi bersama untuk fashion yang bertanggung jawab dan pertumbuhan berkelanjutan.

"
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Testimonials */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Testimoni Klien"
            subtitle="Dengarkan apa yang mitra kami katakan tentang bekerja dengan kami."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm relative"
              >
                <div className="mb-6">
                  <svg className="text-primary-400 dark:text-primary-500 w-10 h-10 absolute top-6 left-6 opacity-20" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.844c-5.677 0-10.281 4.604-10.281 10.281s4.604 10.281 10.281 10.281 10.281-4.604 10.281-10.281-4.604-10.281-10.281-10.281zM8.625 10.935c0.599-0.599 1.571-0.599 2.17 0s0.599 1.571 0 2.17c-0.599 0.599-1.571 0.599-2.17 0s-0.599-1.571 0-2.17zM8.625 21.518c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM10.802 17.227c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM16.443 21.518c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM14.364 17.227c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0zM16.443 13.105c-0.599-0.599-0.599-1.571 0-2.17s1.571-0.599 2.17 0c0.599 0.599 0.599 1.571 0 2.17s-1.571 0.599-2.17 0z"></path>
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400 italic relative z-10">"{testimonial.quote}"</p>
                </div>
                <div className="mt-auto">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary-600 dark:text-primary-400">{testimonial.company}</p>
                  <div className="flex items-center mt-2 text-gray-500 dark:text-gray-400">
                    <MapPinIcon size={16} className="mr-1" />
                    <span className="text-sm">{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
<section className="section bg-gray-50 dark:bg-gray-800">
  <div className="container-custom">
    <SectionTitle
      title="Kisah Sukses"
      subtitle="Studi kasus yang memamerkan proyek kolaboratif kami dengan merek global."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm"
      >
        <div className="h-64">
          <img
            src="https://hypeabis.id/assets/content/20210910082827000000erigo04.JPEG?auto=compress&cs=tinysrgb&w=1600"
            alt="Client success story 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 mx-6"></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">UNIQLO – Premium Cotton Shirt Collection</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            PT Doori Lestari Garment dipercaya untuk memproduksi koleksi kemeja katun premium UNIQLO untuk pasar Asia Tenggara. Proyek ini membutuhkan kualitas jahitan yang tinggi, standar internasional, dan efisiensi waktu produksi yang tinggi.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">UNIQLO </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">PremiumShirt </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">GarmentManufacturing </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">GlobalPartner </span>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm"
      >
        <div className="h-64">
          <img
            src="https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Client success story 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-t border-gray-300 dark:border-gray-600 mx-6"></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">H&M – Sustainable Fashion Line</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            PT Doori Lestari Garment tengah menggarap proyek busana ramah lingkungan untuk H&M, menggunakan bahan daur ulang dan pewarna alami. Kolaborasi ini merupakan bagian dari komitmen H&M terhadap produksi mode berkelanjutan.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">HandM </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">SustainableFashion </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">EcoGarment </span>
            <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded">GreenProduction </span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Clients;