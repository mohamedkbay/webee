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
              {<Shirt className="text-primary-600 dark:text-primary-400" size={24} />}
              <h3 className="text-xl font-heading font-semibold">Tech Shield</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
Tech Shield is your trusted partner for IT support and technology services. We work side by side with you to keep your systems running smoothly, your networks secure, and your team supported.            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/techshield.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/techshield-ly/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/message/PCBJSRPMDFEZO1"
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
              <li className="text-gray-600 dark:text-gray-400">IT Solutions</li>
              <li className="text-gray-600 dark:text-gray-400">Network Services</li>
              <li className="text-gray-600 dark:text-gray-400">Digital Transformation</li>
              <li className="text-gray-600 dark:text-gray-400">Custom Apparel Production</li>
              <li className="text-gray-600 dark:text-gray-400">Programming Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600 dark:text-gray-400">
                  Zawiyat al Dahmani St, Tripoli
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={18} />
                <a
                  href="mailto:anjasprimary@gmail.com"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  info@techshield.ly
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={18} />
                <a
                  href="tel:+218921255124"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  +218 92 1255124
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Tech Shield. All rights reserved 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;