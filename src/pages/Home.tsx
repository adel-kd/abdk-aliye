import { motion } from "motion/react";
import { ArrowRight, Phone, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useLanguage();
  
  const metrics = [
    { label: t('studentsTaught'), value: "500+" },
    { label: t('songsCovered'), value: "100+" },
    { label: t('eventsHosted'), value: "250+" },
  ];

  const galleryImages = [
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316649/Screenshot_from_2026-07-17_22-10-00_ewgxr4.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316638/Screenshot_from_2026-07-17_22-10-25_shzvax.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316609/Screenshot_from_2026-07-17_22-27-26_euhx7f.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316612/Screenshot_from_2026-07-17_22-27-02_iepiau.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316599/Screenshot_from_2026-07-17_22-09-48_o6viib.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316599/Screenshot_from_2026-07-17_22-09-08_dkzlsb.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316628/Screenshot_from_2026-07-17_22-26-36_smlrdo.png"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/ddntf1cdt/image/upload/v1784462738/Screenshot_from_2026-07-19_15-01-23_dfkpfu.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-left md:object-center"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-right flex flex-col items-end"
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
              {t('heroTagline')}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              Experience the soulful sounds of acoustic Ethiopia. From professional music education to unannounced surprise performances that create lifelong memories.
            </p>
            
            <div className="flex flex-col sm:flex-row-reverse gap-3">
              <Link 
                to="/academy" 
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-200/50"
              >
                {t('enrollNow')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/booking" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-gray-900 hover:text-white transition-all"
              >
                {t('bookNow')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-amber-50 py-12 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-600 mb-1">{m.value}</div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-widest">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Artist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('aboutArtist')}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Abdulkarim Aliye, widely known as ABDK, is a celebrated Ethiopian acoustic musician whose voice breathes life into modern and classic covers. Known for his signature acoustic style, he has captivated audiences with masterpieces like "Ye Fikir Emebet" and collaborates regularly with local collectives such as The Groove Band.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As an educator, his mission through ABDK Music School is to nurture the next generation of Ethiopian vocalists and guitarists, blending traditional melodies with contemporary performance techniques.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Call Directly</div>
                    <div className="text-lg font-semibold text-gray-900">0923118288 / 0987428747</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Send className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Telegram Channel</div>
                    <div className="text-lg font-semibold text-gray-900">@abdkmusic</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={galleryImages[0]} alt="ABDK 1" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
                <img src={galleryImages[1]} alt="ABDK 2" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
              </div>
              <div className="space-y-4 pt-8">
                <img src={galleryImages[2]} alt="ABDK 3" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
                <img src={galleryImages[3]} alt="ABDK 4" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Life with Music</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {galleryImages.slice(4).map((img, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.05 }}
                src={img} 
                alt={`Gallery ${i}`} 
                className="h-72 w-auto object-cover rounded-2xl shadow-xl border-4 border-white"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
