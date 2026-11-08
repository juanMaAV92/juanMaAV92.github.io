import type { HomeDict } from './types';

const en: HomeDict = {
  meta: {
    titleSuffix: 'Backend Engineer & Tech Lead',
    jobTitle: 'Backend Engineer & Tech Lead',
  },
  hero: {
    ctaWork: 'View selected work',
    ctaTalk: 'Let’s talk',
    sendMessage: 'Send a message',
    contactLinksLabel: 'Contact links',
    stackLabel: 'Tech stack',
  },
  sections: { experience: 'Experience', projects: 'Projects', openSource: 'Open source', contact: 'Contact' },
  form: {
    prompt: 'send a message',
    subject: 'New message from juanMaAV92.github.io',
    nameLabel: 'name',
    namePlaceholder: 'Jane Doe',
    emailLabel: 'email',
    emailPlaceholder: 'jane@company.com',
    messageLabel: 'message',
    messagePlaceholder: 'Tell me about the role or project…',
    send: 'send',
    retry: 'Try again',
    status: {
      notConfigured: '✗ Message service is not configured yet. Use LinkedIn instead.',
      sending: '› Sending your message…',
      sent: '✓ Message sent. I’ll get back to you soon.',
      failed: '✗ The message could not be sent. Check the fields and try again.',
      network: '✗ Network error. Check your connection and try again, or use LinkedIn.',
    },
  },
};

export default en;
