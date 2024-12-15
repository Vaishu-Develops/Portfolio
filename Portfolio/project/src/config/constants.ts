import { Code, Database, Terminal, Globe, Server, Layout, Linkedin, Github } from 'lucide-react';
import { Skill, SocialLink, NavItem } from '../types';

export const SKILLS: Skill[] = [
  { name: 'Python', icon: Terminal, category: 'Programming', level: 90 },
  { name: 'Java', icon: Code, category: 'Programming', level: 85 },
  { name: 'C', icon: Terminal, category: 'Programming', level: 80 },
  { name: 'PHP', icon: Server, category: 'Backend', level: 75 },
  { name: 'HTML', icon: Layout, category: 'Frontend', level: 95 },
  { name: 'CSS', icon: Layout, category: 'Frontend', level: 90 },
  { name: 'JavaScript', icon: Globe, category: 'Frontend', level: 85 },
  { name: 'SQL', icon: Database, category: 'Database', level: 80 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: Github,
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];