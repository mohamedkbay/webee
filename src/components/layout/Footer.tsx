import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Phone, Mail, MapPin, Shirt } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shirt className="text-primary-600 dark:text-primary-400" size={24} />
              <h3 className="text-xl font-heading font-semibold">PT Doori Lestari</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Indonesian Garment Manufacturer with Global Standards. Producing high-quality fashion apparel ready for global export.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/anjasmalik_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/6285777222199"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/clients"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">Garment Manufacturing</li>
              <li className="text-gray-600 dark:text-gray-400">Button Attachment & Finishing</li>
              <li className="text-gray-600 dark:text-gray-400">Quality Control</li>
              <li className="text-gray-600 dark:text-gray-400">Custom Apparel Production</li>
              <li className="text-gray-600 dark:text-gray-400">Export Handling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  Jl. Intan I Kampung Curug, Tulang Kuning, Gunung Sindur Kabupaten Bogor, Jawa Barat, 16340 Indonesia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@doorilestarigarment.com"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  info@doorilestarigarment.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={18} />
                <a
                  href="tel:+62-21-555-7890"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  +6285777222199
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PT Doori Lestari Garment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;