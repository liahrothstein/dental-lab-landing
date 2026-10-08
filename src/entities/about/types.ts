export interface AboutStat {
  label: string;
  value: string;
}

export interface AboutInfo {
  title: string;
  paragraphs: string[];
  stats: AboutStat[];
}