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