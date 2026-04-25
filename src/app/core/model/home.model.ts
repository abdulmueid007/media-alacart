export interface HeroBanner {
  image: string;
  eyebrow: string;
  highlight: string;
  title: string;
  subtitle: string;
}

export interface AdBanner {
  primaryText: string;
  secondaryText: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface SolutionCardType {
  title: string;
  description: string;
  icon?: string;
  cta?: string;
  highlight?: boolean;
}


export interface SolutionSection {
  heading: string;
  highlightText: string;
  subheading: string;
  heroImage: string;
  heroText: string;
  cards: SolutionCardType[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsData {
  badge: string;
  heading: string;
  subtext: string;
  buttonLabel: string;
  bannerImage: string;
  stats: StatItem[];
}


export type MediaInfo = {
  title: string;
  bullets: string[];
  cta: {
    text: string;
  };
};

export interface HomeResponse {
  hero: HeroBanner;
  adBanner: AdBanner;
  services: Service[];
  solutions: SolutionSection;
  statsData: StatsData;
  mediaInfo: MediaInfo;
}