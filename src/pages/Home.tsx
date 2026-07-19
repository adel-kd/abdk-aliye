import { motion } from "motion/react";
import { ArrowRight, Phone, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { t } = useLanguage();

  const metrics = [
    { label: t('studentsTaught'), value: "100+" },
    { label: t('songsCovered'), value: "20+" },
    { label: t('eventsHosted'), value: "20+" },
  ];

  const galleryImages = [

    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316612/Screenshot_from_2026-07-17_22-27-02_iepiau.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316599/Screenshot_from_2026-07-17_22-09-48_o6viib.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316599/Screenshot_from_2026-07-17_22-09-08_dkzlsb.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316628/Screenshot_from_2026-07-17_22-26-36_smlrdo.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316638/Screenshot_from_2026-07-17_22-10-25_shzvax.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316609/Screenshot_from_2026-07-17_22-27-26_euhx7f.png",
    "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316649/Screenshot_from_2026-07-17_22-10-00_ewgxr4.png",

  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/ddntf1cdt/image/upload/v1784462738/Screenshot_from_2026-07-19_15-01-23_dfkpfu.png"
            alt="Hero Background"
            className="w-full h-full object-cover object-[28%_center] md:object-center scale-105"
          />

          {/* Soft warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-amber-500/10" />

          {/* Light fade behind desktop text */}
          <div className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-l from-white/20 via-white/5 to-transparent" />

          {/* Decorative blur */}
          <div className="hidden md:block absolute top-20 right-24 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl" />
          <div className="hidden md:block absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-300/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
          max-w-xl
          text-center
          md:text-right
          flex
          flex-col
          items-center
          md:items-end
        "
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-amber-500 leading-[0.9] tracking-tight">
                ABDK Music School and Surprising
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-white max-w-md md:max-w-xl leading-relaxed">
                Experience the soulful sounds of acoustic Ethiopia.
                From professional music education to unforgettable
                surprise performances that create lifelong memories.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row-reverse gap-4 w-full sm:w-auto">
                <Link
                  to="/academy"
                  className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105 hover:bg-amber-400"
                >
                  {t("enrollNow")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/booking"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {t("bookNow")}
                </Link>
              </div>
            </motion.div>
          </div>
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
