import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
            <div className="text-3xl font-bold mb-4">
              <span>Travel</span>
              <span className="text-blue-400">Guide</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover the best destinations around the world with our comprehensive travel guides and tips. 
              Let us help you plan your perfect getaway!
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/destinations" className="hover:text-blue-400">Destinations</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Travel Lane</p>
            <p className="mb-2">City, Country 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: <a href="mailto:support@travelguide.com" className="hover:text-blue-400">support@travelguide.com</a></p>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest travel tips, offers, and updates.</p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-2 border border-gray-600 rounded-md bg-gray-900 text-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-gray-800 py-2 px-4 rounded-md hover:bg-blue-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">&copy; 2024 TravelGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
