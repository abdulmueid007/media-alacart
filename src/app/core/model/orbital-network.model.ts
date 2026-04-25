export interface OrbitConfig {
  rFrac: number;
  speed: number;
}

export interface DotConfig {
  orbitIdx: number;
  angleFrac: number;
}

export interface OrbitalAvatar {
  image: string;
  orbitIdx: number;
  phaseFrac: number;
}
