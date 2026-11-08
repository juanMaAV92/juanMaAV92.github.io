import type { HomeDict } from './types';

const es: HomeDict = {
  meta: {
    titleSuffix: 'Backend Engineer y Tech Lead',
    jobTitle: 'Backend Engineer y Tech Lead',
  },
  hero: {
    ctaWork: 'Ver proyectos destacados',
    ctaTalk: 'Hablemos',
    sendMessage: 'Envíame un mensaje',
    contactLinksLabel: 'Enlaces de contacto',
    stackLabel: 'Stack técnico',
  },
  sections: { experience: 'Experiencia', projects: 'Proyectos', openSource: 'Open source', contact: 'Contacto' },
  form: {
    prompt: 'envíame un mensaje',
    subject: 'Nuevo mensaje desde juanMaAV92.github.io (ES)',
    nameLabel: 'nombre',
    namePlaceholder: 'Ana Gómez',
    emailLabel: 'email',
    emailPlaceholder: 'ana@empresa.com',
    messageLabel: 'mensaje',
    messagePlaceholder: 'Cuéntame sobre el rol o el proyecto…',
    send: 'enviar',
    retry: 'Intentar de nuevo',
    status: {
      notConfigured: '✗ El servicio de mensajes aún no está configurado. Escríbeme por LinkedIn.',
      sending: '› Enviando tu mensaje…',
      sent: '✓ Mensaje enviado. Te respondo pronto.',
      failed: '✗ No se pudo enviar el mensaje. Revisa los campos e inténtalo de nuevo.',
      network: '✗ Error de red. Revisa tu conexión e inténtalo de nuevo, o escríbeme por LinkedIn.',
    },
  },
};

export default es;
