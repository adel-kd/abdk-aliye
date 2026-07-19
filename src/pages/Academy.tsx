import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { GraduationCap, Clock, Signal, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const courses = [
  {
    id: "beginner-guitar",
    title: { en: "Beginner Acoustic Guitar", am: "የመጀመሪያ ደረጃ አኮስቲክ ጊታር" },
    description: { en: "Master the fundamentals of guitar, from basic chords to your first Ethiopian melody.", am: "የጊታር መሰረታዊ ትምህርቶች፣ ከቅኝቶች እስከ መጀመሪያው የኢትዮጵያ ዜማ።" },
    duration: { en: "3 Months", am: "3 ወራት" },
    level: { en: "Beginner", am: "ጀማሪ" },
    price: "ETB 2,500/mo",
    highlights: { 
      en: ["Finger placement", "Strumming patterns", "Basic Tizita scales", "Rhythm exercises"],
      am: ["የጣት አቀማመጥ", "አመታት", "የትዝታ ቅኝቶች", "የምት ልምምድ"]
    }
  },
  {
    id: "vocal-training",
    title: { en: "Vocal Training & Pitch Control", am: "የድምፅ ስልጠና እና ቁጥጥር" },
    description: { en: "Develop your unique voice with professional breathing and pitch exercises.", am: "በፕሮፌሽናል የአተነፋፈስ እና የድምፅ ልምምዶች ልዩ ድምፅዎን ያሳድጉ።" },
    duration: { en: "4 Months", am: "4 ወራት" },
    level: { en: "Intermediate", am: "መካከለኛ" },
    price: "ETB 3,000/mo",
    highlights: { 
      en: ["Breath control", "Vocal range expansion", "Ethiopian vibrato", "Ear training"],
      am: ["የአተነፋፈስ ቁጥጥር", "የድምፅ ክልልን ማስፋት", "የኢትዮጵያ ዜማ", "የጆሮ ስልጠና"]
    }
  },
  {
    id: "performance-mastery",
    title: { en: "Advanced Performance Mastery", am: "የከፍተኛ ደረጃ አፈፃፀም ብቃት" },
    description: { en: "Learn stage presence and advanced arrangement for professional performers.", am: "ለፕሮፌሽናል ተዋንያን የመድረክ ዝግጅት እና የላቀ አደረጃጀትን ይማሩ።" },
    duration: { en: "6 Months", am: "6 ወራት" },
    level: { en: "Advanced", am: "ከፍተኛ" },
    highlights: { 
      en: ["Stage presence", "Live arrangement", "Complex improvisations", "Recording prep"],
      am: ["የመድረክ ብቃት", "የቀጥታ ዝግጅት", "ውስብስብ ጨዋታዎች", "የመዝገብ ዝግጅት"]
    }
  }
];

export const Academy = () => {
  const { language, t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    skillLevel: "Beginner",
    timing: "Weekend"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleEnrollClick = (course: any) => {
    // Redirect to telegram for price/enrollment as requested
    window.open(`https://t.me/+251987428747?text=Hello, I am interested in enrolling for ${course.title.en}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-amber-100 text-amber-600 mb-6">
          <GraduationCap className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('academy')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enroll in ABDK Music School and start your journey towards musical excellence with personalized guidance from the master himself.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                {course.level[language]}
              </span>
              <div className="flex items-center text-gray-400 gap-1 text-sm">
                <Clock className="w-4 h-4" />
                {course.duration[language]}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title[language]}</h3>
            <p className="text-gray-600 mb-8 flex-grow">{course.description[language]}</p>
            
            <div className="space-y-3 mb-8">
              {course.highlights[language].map((h: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {h}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedCourse(course)}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-amber-600 transition-colors"
            >
              Enroll Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {step === 1 ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Form</h2>
                    <p className="text-gray-500 mb-8">Course: {selectedCourse.title[language]}</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all outline-none"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                        <input
                          required
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition-all outline-none"
                          placeholder="09..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Skill Level</label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none"
                            value={formData.skillLevel}
                            onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
                          >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Batch Timing</label>
                          <select 
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none"
                            value={formData.timing}
                            onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                          >
                            <option>Weekend</option>
                            <option>Weekday Evening</option>
                          </select>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full py-4 bg-amber-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-200 hover:bg-amber-700 transition-all mt-4"
                      >
                        Submit Registration
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Almost Done!</h2>
                    <p className="text-gray-600 mb-8 px-4">
                      Thank you for your interest, {formData.name}. To complete your enrollment and see the full pricing, please contact us on Telegram.
                    </p>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8 border border-gray-100">
                      <div className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Transaction Summary</div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-500">Course</span>
                        <span className="font-bold text-gray-900">{selectedCourse.title[language]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Ref ID</span>
                        <span className="font-mono text-amber-600">ABDK-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        window.open(`https://t.me/+251987428747?text=Hello, I am ${formData.name}. I just submitted an enrollment for ${selectedCourse.title.en}. My phone is ${formData.phone}`, '_blank');
                        setSelectedCourse(null);
                        setStep(1);
                      }}
                      className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    >
                      Complete on Telegram
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
