export type Lang = 'en' | 'ar';

const EN = {
  // Nav
  'nav.platform': 'The Platform',
  'nav.features': 'Features',
  'nav.benefits': 'Benefits',
  'nav.demo': 'Request a Demo',
  'nav.contact': 'Contact Us',
  'nav.about': 'About Us',
  // Header
  'header.login': 'Login',
  'header.toggleMenu': 'Toggle menu',
  // Footer
  'footer.tagline': 'The Future Media Hub',
  'footer.usefulLinks': 'Useful Links',
  'footer.contactUs': 'Contact Us',
  'footer.link.platform': 'The Platform',
  'footer.link.features': 'Features',
  'footer.link.benefits': 'Benefits',
  'footer.link.demo': 'Request a Demo',
  'footer.link.contact': 'Contact Us',
  'footer.link.about': 'About Us',
  'footer.link.privacy': 'Privacy Policy',
  'footer.link.terms': 'Terms of Service',
  'footer.address1': 'Makateb 2 Building Floor 4, Office 406',
  'footer.address2': 'Dubai Production City, Dubai',
  'footer.address3': 'United Arab Emirates',
  'footer.copyright': 'Media Alacarte Agency FZ LLC - All Rights Reserved.',
  // Hero
  'hero.cta': 'Start your journey!',
  'hero.learnMore': 'Learn More',
  // Solutions
  'solutions.tag': 'WHY MEDIA ALA CARTE?',
  'solutions.getStarted': 'Get Started',
  // Services
  'services.heading': 'Our Services',
  // Media
  'media.optimizeBtn': 'Optimize Your Media Today',
} as const;

const AR: Record<keyof typeof EN, string> = {
  // Nav
  'nav.platform': 'المنصة',
  'nav.features': 'المميزات',
  'nav.benefits': 'الفوائد',
  'nav.demo': 'طلب عرض تجريبي',
  'nav.contact': 'اتصل بنا',
  'nav.about': 'من نحن',
  // Header
  'header.login': 'تسجيل الدخول',
  'header.toggleMenu': 'تبديل القائمة',
  // Footer
  'footer.tagline': 'مركز الإعلام المستقبلي',
  'footer.usefulLinks': 'روابط مفيدة',
  'footer.contactUs': 'اتصل بنا',
  'footer.link.platform': 'المنصة',
  'footer.link.features': 'المميزات',
  'footer.link.benefits': 'الفوائد',
  'footer.link.demo': 'طلب عرض تجريبي',
  'footer.link.contact': 'اتصل بنا',
  'footer.link.about': 'من نحن',
  'footer.link.privacy': 'سياسة الخصوصية',
  'footer.link.terms': 'شروط الخدمة',
  'footer.address1': 'مكاتب 2، الطابق 4، مكتب 406',
  'footer.address2': 'مدينة دبي للإنتاج، دبي',
  'footer.address3': 'الإمارات العربية المتحدة',
  'footer.copyright': 'وكالة ميديا ألا كارت FZ LLC - جميع الحقوق محفوظة.',
  // Hero
  'hero.cta': '!ابدأ رحلتك',
  'hero.learnMore': 'اعرف المزيد',
  // Solutions
  'solutions.tag': 'لماذا ميديا ألا كارت؟',
  'solutions.getStarted': 'ابدأ الآن',
  // Services
  'services.heading': 'خدماتنا',
  // Media
  'media.optimizeBtn': 'حسّن وسائل إعلامك اليوم',
};

export const TRANSLATIONS: Record<Lang, Record<string, string>> = { en: EN, ar: AR };
