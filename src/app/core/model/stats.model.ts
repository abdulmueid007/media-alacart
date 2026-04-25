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