import { DotConfig, OrbitConfig } from '../model/orbital-network.model';

export const CX_FRAC = 0.5;
export const CY_FRAC = 0.05;

export const ORBITS: OrbitConfig[] = [
  { rFrac: 0.45, speed: 0.022 },
  { rFrac: 0.65, speed: 0.016 },
  { rFrac: 0.85, speed: 0.011 },
];

export const EDGE_FADE = 0.06;

export const STATIC_DOTS: DotConfig[] = [
  { orbitIdx: 0, angleFrac: 0.38 },
  { orbitIdx: 1, angleFrac: 0.1 },
  { orbitIdx: 1, angleFrac: 0.68 },
  { orbitIdx: 2, angleFrac: 0.3 },
  { orbitIdx: 2, angleFrac: 0.7 },
];
