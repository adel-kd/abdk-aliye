import { Instagram, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="https://static.vecteezy.com/system/resources/previews/065/394/979/non_2x/illustration-of-two-golden-music-notes-isolated-on-transparent-background-png.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold tracking-tighter text-gray-900">ABDK</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Premium acoustic music education and performance services in the heart of Ethiopia. Elevating melodies, one string at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/abd.kmusic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-amber-50 hover:text-amber-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@abd.k4" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-amber-50 hover:text-amber-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://t.me/+251987428747" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-amber-50 hover:text-amber-600 transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/music" className="text-gray-500 text-sm hover:text-amber-600 transition-colors">{t('music')}</Link></li>
              <li><Link to="/academy" className="text-gray-500 text-sm hover:text-amber-600 transition-colors">{t('academy')}</Link></li>
              <li><Link to="/booking" className="text-gray-500 text-sm hover:text-amber-600 transition-colors">{t('booking')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('contact')}</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</div>
                  <div className="text-sm font-semibold text-gray-900">0923118288</div>
                  <div className="text-sm font-semibold text-gray-900">0987428747</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-sm font-semibold text-gray-900">info@abdkmusic.com</div>
                </div>
              </div>
              <div className="flex gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-sm font-semibold text-gray-900">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} ABDK Music School & Serenade. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-gray-400 text-xs hover:text-gray-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
