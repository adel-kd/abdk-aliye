import { useState, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Calculator, Calendar, Users, Music, Volume2, Mic2, Star, Send } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const eventTypes = [
  { id: 'birthday', label: { en: "Birthday Surprise", am: "የልደት አስገራሚ ስጦታ" }, base: 1500 },
  { id: 'proposal', label: { en: "Wedding Proposal", am: "የጋብቻ ጥያቄ" }, base: 2500 },
  { id: 'corporate', label: { en: "Corporate Stage Gig", am: "የድርጅት ኮንሰርት" }, base: 5000 },
  { id: 'wedding', label: { en: "Wedding Program", am: "የሰርግ ፕሮግራም" }, base: 4000 },
];

const addons = [
  { id: 'band', label: { en: "Acoustic Band Accompaniment", am: "የባንድ አጃቢ" }, price: 2000, icon: Music },
  { id: 'sound', label: { en: "Sound System Rental", am: "የድምፅ መሳሪያ ኪራይ" }, price: 1500, icon: Volume2 },
  { id: 'song', label: { en: "Custom Personalized Song", am: "ልዩ ዘፈን" }, price: 3000, icon: Mic2 },
];

export const Booking = () => {
  const { t, language } = useLanguage();
  const [eventType, setEventType] = useState(eventTypes[0].id);
  const [duration, setDuration] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    const base = eventTypes.find(e => e.id === eventType)?.base || 0;
    const addonPrice = selectedAddons.reduce((sum, id) => {
      return sum + (addons.find(a => a.id === id)?.price || 0);
    }, 0);
    return (base * duration) + addonPrice;
  }, [eventType, duration, selectedAddons]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-amber-600" />
            Premium Surprise Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Make Your Moments <br />
            <span className="text-amber-600">Unforgettable</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            ABDK and his specialized Serenade team organize high-end live unannounced musical surprises. From intimate proposals to large-scale birthday celebrations, we bring the soul of acoustic music to your doorstep.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Expert Team</h4>
                <p className="text-sm text-gray-500">Professional musicians and coordinators to handle every detail.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Custom Programs</h4>
                <p className="text-sm text-gray-500">Each event is tailored to the personality and preference of your loved ones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Calculator Widget */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 bg-amber-600 rounded-xl text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('calcTitle')}</h3>
          </div>

          <div className="space-y-8">
            {/* Event Type */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">{t('eventType')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEventType(type.id)}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-sm font-semibold transition-all border text-left",
                      eventType === type.id 
                        ? "bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-200" 
                        : "bg-gray-50 text-gray-600 border-transparent hover:border-gray-200"
                    )}
                  >
                    {type.label[language]}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-bold text-gray-900 uppercase tracking-wider">{t('duration')}</label>
                <span className="text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-full">{duration} {duration === 1 ? 'Hour' : 'Hours'}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="5" 
                step="0.5"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1 Hour</span>
                <span>5 Hours</span>
              </div>
            </div>

            {/* Addons */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">{t('addons')}</label>
              <div className="space-y-3">
                {addons.map((addon) => {
                  const Icon = addon.icon;
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left",
                        isSelected 
                          ? "bg-amber-50 border-amber-200" 
                          : "bg-white border-gray-100 hover:border-gray-200"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                        isSelected ? "bg-amber-600 text-white" : "bg-gray-50 text-gray-400"
                      )}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={cn(
                        "flex-1 text-sm font-bold",
                        isSelected ? "text-gray-900" : "text-gray-600"
                      )}>{addon.label[language]}</span>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-amber-600" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total Section */}
            <div className="pt-8 border-t border-gray-100">
              <div className="mb-8">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Request Booking</div>
                <p className="text-xs text-gray-400">Our pricing depends on event location and specific custom requests. Push to Telegram to get an instant quote from ABDK.</p>
              </div>

              <button
                onClick={() => {
                  const details = `Event: ${eventTypes.find(e => e.id === eventType)?.label.en}, Duration: ${duration}hr, Addons: ${selectedAddons.join(', ')}`;
                  window.open(`https://t.me/+251987428747?text=Hello, I want to book a surprise performance. Details: ${details}.`, '_blank');
                }}
                className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('seePrice')}
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4 font-medium uppercase tracking-tighter">
                Clicking above will lock these details and forward you to ABDK's Telegram.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
