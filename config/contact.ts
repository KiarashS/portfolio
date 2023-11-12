export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
  googlescholar = 'googlescholar',
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
    googlescholar: 'https://go.kiarashs.ir/scholar',
    github: 'https://go.kiarashs.ir/github',
    linkedin: 'https://go.kiarashs.ir/linkedin',
    twitter: 'https://go.kiarashs.ir/twitter',
    youtube: 'https://www.youtube.com/c/KiarashS',
    email: 'mailto:kiarash.s@hotmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/_kiarash_',
  },
};
