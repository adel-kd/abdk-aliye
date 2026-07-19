import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Play, Music as MusicIcon, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const videos = [
  {
    id: "_B0qwUf816Y",
    type: "cover",
    title: {
      en: "Neway Debebe - Ye Fikir Emebet",
      am: "ኑዋይ ደበበ - የፍቅር እመቤት",
    },
  },
  {
    id: "owYsGa_NbZ0",
    type: "cover",
    title: {
      en: "Teshome Mitiku - Susignash",
      am: "ተሾመ ምትኩ - ሱሰኛሽ",
    },
  },
  {
    id: "t7JyBgN3ACQ",
    type: "cover",
    title: {
      en: "Abel Mulugeta - Shukren",
      am: "አቤል ሙሉጌታ - ሹክረን",
    },
  },
  {
    id: "mWsxFtcGLl8",
    type: "cover",
    title: {
      en: "Tamerat Desta - Yelben",
      am: "ታምራት ደስታ - የልበን",
    },
  },
  {
    id: "0LAVk5qiiJA",
    type: "official",
    title: {
      en: "Ajeba Ajeba",
      am: "አጀባ አጀባ",
    },
  },
];

export const Music = () => {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(videos[4]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      <div className="mb-12">


        <p className="text-gray-600 max-w-2xl">
          Watch ABDK's latest performances, acoustic covers, and official
          releases. Enjoy timeless Ethiopian classics alongside original music.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Player */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}`}
              title={activeVideo.title[language]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="mt-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeVideo.title[language]}
              </h2>

              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                  activeVideo.type === "official"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-100 text-gray-600"
                )}
              >
                {activeVideo.type === "official"
                  ? "Official"
                  : "Cover"}
              </span>
            </div>

            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <Youtube className="w-4 h-4" />
                <span>YouTube</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-300" />

              <span>
                {activeVideo.type === "official"
                  ? "Official Music Video"
                  : "Acoustic Cover"}
              </span>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900 px-2 flex items-center justify-between">
            <span>Playlist</span>

            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full uppercase tracking-wider">
              {videos.length} Tracks
            </span>
          </h3>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={cn(
                  "w-full flex items-center gap-4 p-3 rounded-2xl transition-all text-left border group",
                  activeVideo.id === video.id
                    ? "bg-amber-50 border-amber-200 ring-1 ring-amber-100"
                    : "bg-white border-transparent hover:border-gray-200 hover:bg-gray-50"
                )}
              >
                <div className="relative w-24 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title[language]}
                    className="h-full w-full object-cover"
                  />

                  {activeVideo.id === video.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-600/20">
                      <Play className="h-6 w-6 fill-amber-600 text-amber-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className={cn(
                      "truncate text-sm font-bold transition-colors",
                      activeVideo.id === video.id
                        ? "text-amber-700"
                        : "text-gray-900 group-hover:text-amber-600"
                    )}
                  >
                    {video.title[language]}
                  </h4>
                  <div className="mt-1 flex items-center gap-2 flex-wrap">
                    <p className="text-xs text-gray-500">
                      {video.type === "official"
                        ? "ABDK • Official Music Video"
                        : "ABDK • Acoustic Cover"}
                    </p>

                    {video.type === "official" && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        Official
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Original Song */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 p-8 text-white"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em]">
              Official Release
            </span>

            <h2 className="mt-5 text-4xl font-black">
              Ajeba Ajeba
            </h2>

            <p className="mt-4 text-white/90 leading-relaxed">
              "Ajeba Ajeba" is ABDK's official original music video.
              Alongside acoustic interpretations of beloved Ethiopian
              classics, this song showcases his own artistic identity
              and musical style.
            </p>
          </div>

          <button
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-amber-700 transition-all hover:scale-105 hover:bg-amber-50"
          >
            <Play className="h-5 w-5 fill-current" />
            Watch Official Video <a href="https://www.youtube.com/watch?v=0LAVk5qiiJA"></a>
          </button>
        </div>
      </motion.div>
    </div>
  );
};