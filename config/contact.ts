export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
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
    github: 'https://github.com/KiarashS',
    linkedin: 'https://linkedin.com/in/thekiarash',
    twitter: 'https://twitter.com/ItIsKiarash',
    email: 'mailto:kiarash.s@hotmail.com',
  },
};
