export interface Skill {
  name: string;
  icon: React.ComponentType;
  category: string;
  level: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType;
}

export interface NavItem {
  label: string;
  href: string;
}