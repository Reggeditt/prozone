import Link from "next/link";
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { constructionContent } from "@/lib/construction-content";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 text-white p-2 rounded-lg">
                <div className="w-6 h-6 flex items-center justify-center font-bold">
                  PZ
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">
                  {constructionContent.global.companyName}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              {constructionContent.global.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              {constructionContent.about.overview}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {constructionContent.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {constructionContent.home.featuredServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              {constructionContent.contact.info.phones.map((phone, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300 text-sm">{phone}</span>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">
                  {constructionContent.contact.info.email}
                </span>
              </div>
              {constructionContent.contact.info.locations.map((location, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300 text-sm">
                    {location.city}: {location.address}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 {constructionContent.global.companyName}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href={constructionContent.global.legal.privacyPolicy}
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href={constructionContent.global.legal.termsOfService}
                className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
