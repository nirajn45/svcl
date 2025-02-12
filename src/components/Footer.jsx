import React from "react";
import { MapPin, Phone, Mail, Globe, Scale } from "lucide-react";

function Footer() {
  return (
    <div className=" bg-gray-100 flex flex-col">
      {/* Main content would go here */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Column 1: Main CTA */}
            <div className="space-y-4">
              <div className="flex items-center border-b-2">
                {/* <Scale className="w-8 h-8 text-white" /> */}
                <img
                  src="https://bmnmsbiymz.ufs.sh/f/1V3V2P4kpAumwSKx1slYh6vMjIobVskel2URXBKJwfdaEic9"
                  alt="SVCL Logo"
                  width={120}
                  height={60}
                  className="w-28 sm:w-32 md:w-60 h-auto"
                />
              </div>
              <h4 className="text-xl font-semibold text-white">
                Join Us & Be the Future of Law!
              </h4>
              <p className="text-gray-300 text-justify">
                If you have the passion to uphold justice, the dedication to
                lead, and the vision to transform the legal landscape, Swami
                Vivekanand College of Law, Banur, is your destination!
              </p>
            </div>

            {/* Column 2: Contact Information */}
            <div className="space-y-4 mt-16 border-l-2 px-6">
              <h4 className="text-lg font-semibold text-white">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white" />
                  <span>+91- 94652 33333</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                  <span>
                    Village- Ramnagar Near Banur, Tehsil- Rajpura, District-
                    Patiala
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span>Admission@sviet.ac.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-white" />

                  <a href="https://www.sviet.ac.in/">
                    <span>Visit Our Website</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Vision */}
            <div className="space-y-4 mt-16 border-l-2 px-6">
              <h4 className="text-lg font-semibold text-white">Our Vision</h4>
              <p className="text-gray-300">
                Empowering Legal Minds, Creating Future Leaders!
              </p>
              <div className="pt-4">
                <a href="https://admission.sviet.ac.in/">
                  <button className="bg-white hover:bg-yellow-600 text-slate-900 font-semibold px-6 py-3 rounded-md transition-colors">
                    Apply Now
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Swami Vivekanand College of Law,
              Banur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
