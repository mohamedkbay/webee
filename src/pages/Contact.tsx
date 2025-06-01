import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Contact Us | PT Doori Lestari Garment";
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
              title="Hubungi Kami"
              subtitle="Mari diskusikan bagaimana kami dapat mewujudkan ide busana Anda."
              className="mb-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <SectionTitle
            title="Pertanyaan yang Sering Diajukan"
            subtitle="Temukan jawaban atas pertanyaan umum tentang layanan kami."
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Berapa kapasitas produksi PT Doori Lestari Garment?",
                answer: "Kami mampu menangani produksi dalam jumlah besar sesuai kebutuhan klien, mulai dari ribuan hingga puluhan ribu potong pakaian per batch."
              },
              {
                question: "Jenis pakaian apa saja yang bisa diproduksi?",
                answer: "Kami memproduksi berbagai jenis pakaian seperti baju, celana, jaket, dan pakaian siap pakai lainnya untuk pria dan wanita."
              },
              {
                question: "Apakah PT Doori Lestari Garment menerima pesanan custom atau spesifik?",
                answer: "Ya, kami menerima pesanan sesuai desain, bahan, dan spesifikasi yang diberikan oleh klien."
              },
              {
                question: "Bagaimana proses kontrol kualitas di PT Doori Lestari Garment?",
                answer: "Setiap tahap produksi melewati pemeriksaan kualitas yang ketat untuk memastikan produk sesuai standar dan bebas cacat."
              },
              {
                question: "Berapa lama waktu produksi biasanya?",
                answer: "Waktu produksi tergantung pada jumlah dan kompleksitas pesanan, namun kami selalu berusaha memenuhi jadwal yang disepakati dengan klien."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;