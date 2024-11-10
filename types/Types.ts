import { ReactNode } from "react";
export interface HeaderLinksType {
  href: string;
  name: string;
}
export interface FooterLinksType {
  link: string;
  name: string;
}
export interface FooterSocialLinksType {
  href: string;
  icon: ReactNode;
}
export interface BlogCardsType {
  image: string;
  comment: string;
  date: string;
  title: string;
}
export interface ProjectCardsType {
  image: string;
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  description: string;
  sourceCode: string;
  livePreview: string;
}
export interface ServicesCardsType {
  title: string;
  num: string;
  description: string;
}
export interface SkillCardsType {
  image: string;
  percent: string;
  title: string;
}
