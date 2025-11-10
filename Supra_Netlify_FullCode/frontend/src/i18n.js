import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Detector from 'i18next-browser-languagedetector'

const res = {
  en:{translation:{cart:'Cart',products:'Products',view:'View',add:'Add',place:'Place order'}},
  hi:{translation:{cart:'कार्ट',products:'उत्पाद',view:'देखें',add:'जोड़ें',place:'ऑर्डर दें'}},
  ta:{translation:{cart:'கார்ட்',products:'பொருட்கள்',view:'காண்க',add:'சேர்',place:'போசியைக்'}},
  te:{translation:{cart:'కార్ట్',products:'ఉత్పత్తులు',view:'చూడండి',add:'జోడించు',place:'ఆర్డర్ పెట్టు'}}
}

i18n.use(Detector).use(initReactI18next).init({resources:res,fallbackLng:'en',interpolation:{escapeValue:false}})
export default i18n
