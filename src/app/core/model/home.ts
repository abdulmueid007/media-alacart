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

export interface HomeResponse {
  hero: HeroBanner;
  adBanner: AdBanner;
  services: Service[];
}