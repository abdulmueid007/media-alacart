import { AdBanner } from "./ad-banner.model";
import { HeroBanner } from "./hero-banner.model";
import { MediaInfo } from "./media-info.model";
import { Service } from "./service.model";
import { SolutionSection } from "./solution.model";
import { StatsData } from "./stats.model";

export interface HomeResponse {
  hero: HeroBanner;
  adBanner: AdBanner;
  services: Service[];
  solutions: SolutionSection;
  statsData: StatsData;
  mediaInfo: MediaInfo;
}