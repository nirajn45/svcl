import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white py-12 font-[Raleway]">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Join Us & Be the Future of Law!
          </h2>
          <p className="text-lg font-light mb-6">
            If you have the passion to uphold justice, the dedication to lead, and the vision to transform the legal landscape, Swami Vivekanand College of Law, Banur, is your destination!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          <div className="space-y-3">
            <p className="font-semibold text-xl">📞 Contact Us</p>
            <p className="text-lg">📍 Address: Swami Vivekanand College of Law, Banur</p>
            <p className="text-lg">📧 Email: contact@svclbanur.edu</p>
            <p className="text-lg">📞 Phone: +123 456 7890</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-xl">🌐 Website</p>
            <p className="text-lg text-blue-200 hover:text-blue-400 transition-colors duration-300">
              <a href="https://www.svclbanur.edu" target="_blank" rel="noopener noreferrer">
                www.svclbanur.edu
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-xl">🚀 Empowering Legal Minds</p>
            <p className="text-lg">Creating Future Leaders, Transforming the Legal Landscape</p>
          </div>
        </div>

        <div className="text-center mt-8 border-t-2 border-blue-600 pt-6">
          <p className="text-lg font-medium text-blue-100">
            © 2025 Swami Vivekanand College of Law. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
