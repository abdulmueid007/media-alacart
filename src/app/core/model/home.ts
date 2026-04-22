export interface HeroBanner {
  image: string;
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

export interface HomeResponse {
  hero: HeroBanner;
  adBanner: AdBanner;
  services: Service[];
  solutions: SolutionSection;
}