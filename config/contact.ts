export enum ContactType {
  googlescholar = 'googlescholar', 
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@ItIsKiarash',
  site: 'blog.kiarashs.ir',
  calendly: 'https://calendly.com/_kiarash_',
  links: {
    googlescholar: 'https://scholar.google.com/citations?hl=en&user=PlzgVJMAAAAJ',
    github: 'https://github.com/KiarashS',
    linkedin: 'https://linkedin.com/in/thekiarash',
    twitter: 'https://twitter.com/ItIsKiarash',
    youtube: 'https://www.youtube.com/c/KiarashS',
    email: 'mailto:kiarash.s@hotmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/_kiarash_',
  },
};
