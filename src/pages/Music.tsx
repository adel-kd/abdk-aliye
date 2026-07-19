import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Play, Music as MusicIcon, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const videos = [
  { id: "_B0qwUf816Y", title: { en: "Ye Fikir Emebet Cover", am: "የፍቅር እመቤት" } },
  { id: "owYsGa_NbZ0", title: { en: "Tizita Acoustic Jam", am: "ትዝታ አኮስቲክ" } },
  { id: "t7JyBgN3ACQ", title: { en: "Nostalgic Acoustic Mix", am: "ኖስታልጂክ ሚክስ" } },
  { id: "mWsxFtcGLl8", title: { en: "Live Session @ Groove", am: "ላይቭ ሴሽን" } },
  { id: "0LAVk5qiiJA", title: { en: "Acoustic Melody", am: "አኮስቲክ ሜሎዲ" } },
];

export const Music = () => {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <MusicIcon className="w-8 h-8 text-amber-600" />
          {language === 'en' ? 'Music & Media' : 'ሙዚቃ እና ሚዲያ'}
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Watch ABDK's latest covers and live performances. Each piece is crafted to bring a unique acoustic soul to Ethiopian classics.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Player */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative group">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="mt-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeVideo.title[language]}
            </h2>
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <Youtube className="w-4 h-4" />
                <span>YouTube Embed</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Acoustic Session</span>
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
                <div className="relative w-24 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                    alt={video.title[language]} 
                    className="w-full h-full object-cover"
                  />
                  {activeVideo.id === video.id && (
                    <div className="absolute inset-0 bg-amber-600/20 flex items-center justify-center">
                      <Play className="w-6 h-6 text-amber-600 fill-amber-600" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={cn(
                    "text-sm font-bold truncate transition-colors",
                    activeVideo.id === video.id ? "text-amber-700" : "text-gray-900 group-hover:text-amber-600"
                  )}>
                    {video.title[language]}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">ABDK Acoustic</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
