"use client";
import React from "react";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import FooterLogo from "@/components/shared/navigation/FooterLogo";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <footer className=" border-t border-b border-emerald-900 bottom-0 mt-auto left-0 right-0 max-w-7xl">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info Section */}
          <div>
            <FooterLogo />
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://facebook.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Facebook size={isMobile ? 18 : 20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Twitter size={isMobile ? 18 : 20} />
              </a>
              <a href="https://linkedin.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Linkedin size={isMobile ? 18 : 20} />
              </a>
              <a href="https://instagram.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Instagram size={isMobile ? 18 : 20} />
              </a>
              <a href="https://youtube.com" className="text-neutral-600 hover:text-blue-600 transition-colors">
                <Youtube size={isMobile ? 18 : 20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-800">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-neutral-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-600 text-sm">
                GODOWN NO - 1, 2, Nanhera Rd, <br/>
                Ambala Cantt, Haryana 133004
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-neutral-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918687868783" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">
                    +918687868783
                  </a>
                  <a href="tel:+919034490812" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">
                    +919034490812
                  </a>
                  <a href="tel:+917496822579" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">
                    +917496822579
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-neutral-600 h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@pharmabrand.com" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm break-all">
                  mppharmaceuticalscor@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="text-neutral-600 h-5 w-5 flex-shrink-0" />
                <a href="https://www.pharmabrand.com" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm break-all">
                  www.mppharmaceuticals.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-neutral-800">Find Us</h3>
            <div className="h-64 w-full overflow-hidden rounded-md border border-neutral-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.25774474744222!2d76.84474715213923!3d30.31899296930296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb5e1cf6ec59b%3A0xa7beea49bae90c66!2sM.P%20PHARMACEUTICALS%20GROUP%20OF%20CO.!5e0!3m2!1sen!2sin!4v1744618996705!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PharmaBrand Location"
              ></iframe>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-neutral-200" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} mppharmaceuticals.com All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

