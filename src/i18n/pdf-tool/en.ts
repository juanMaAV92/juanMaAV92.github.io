import type { PdfToolDict } from './types';

const en: PdfToolDict = {
  lang: 'en',
  languageName: 'English',
  meta: {
    title: 'PDF Tool · Edit your PDFs without uploading anything',
    description:
      'Free, open-source desktop app to compress, merge, split, protect and watermark your PDFs. Everything happens on your computer — your files never leave it. macOS and Windows.',
    ogDescription:
      'Compress, merge, split, protect and watermark your PDFs from your own computer. Free, open source and ad-free.',
    schemaDescription:
      'Free, open-source desktop app to compress, merge, split, protect and watermark PDFs — without uploading anything.',
  },
  nav: { portfolio: '← Portfolio', download: 'Download', language: 'Language' },
  hero: {
    eyebrow: 'Desktop app · macOS & Windows · version 1.1',
    titleHtml: 'Your PDFs, <em>sorted</em><br />— without uploading anything.',
    lede:
      'Compress, merge, split, protect and watermark your documents —and create them from images— on your own computer. Free, open source and ad-free.',
    downloadMac: 'Download for macOS',
    downloadWin: 'Download for Windows',
    help: 'How do I install it? You only need to allow it once →',
    trust: ['100% free', 'No ads', 'Open source', 'Works offline'],
  },
  zoom: {
    label: 'Enlarge screenshot',
    hint: '🔍 Enlarge',
    dialog: 'Enlarged screenshot',
    close: 'Close',
  },
  screenshotAlt: 'PDF Tool home screen with its six tools',
  privacy: {
    title: 'Your files never leave your computer.',
    bodyHtml:
      'Most PDF websites <strong>upload your documents to their servers</strong>. PDF Tool doesn’t: all the work happens on your computer, locally. Ideal for contracts, invoices, personal documents or anything you’d rather not share with anyone.',
  },
  features: {
    title: 'Everything you need to do with a PDF',
    sub: 'Six tools, one app. No tabs, no sign-ups, no waiting.',
    items: [
      { icon: '🗜️', name: 'Compress PDF', desc: 'Shrink one or more PDFs to the size in MB you choose, and see how much you saved on each.' },
      { icon: '🔗', name: 'Merge PDFs', desc: 'Combine several documents into one — with a thumbnail of each file so you can order them by what they contain, and the name you choose.' },
      { icon: '✂️', name: 'Split PDF', desc: 'Split it by page ranges, one page per file or every N pages.' },
      { icon: '🖼️', name: 'Images to PDF', desc: 'Create one PDF per image (JPG or PNG) — and if you want a single one, merge them afterwards.' },
      { icon: '🔒', name: 'Protect PDF', desc: 'Add or remove the password of one or more PDFs at once. It asks twice so you don’t make a mistake.' },
      { icon: '💧', name: 'Watermark', desc: 'Mark a document as “Confidential” or “Draft”, or stamp every page to protect your authorship.' },
    ],
  },
  news: {
    title: 'What’s new in version 1.1',
    sub: 'Better compression, better protection, and now it works from the terminal too.',
    shots: [
      {
        src: '/pdf-tool/compress-result.png',
        alt: 'Result of compressing several PDFs: size before and after and percentage saved for each file',
        caption: 'When compressing you see how much each file weighed, how much it weighs now and how much you saved.',
        width: 2500,
        height: 1638,
      },
      {
        src: '/pdf-tool/merge.png',
        alt: 'Merging PDFs with a thumbnail of each document to order them',
        caption: 'Order the documents by seeing a thumbnail of each one before merging them.',
        width: 2586,
        height: 1540,
      },
    ],
    items: [
      { icon: '🗜️', name: 'Compress without losing text', desc: 'It reduces images first; it only turns pages into images if there is no other way to reach the size you asked for.' },
      { icon: '🔒', name: 'No trace of the old password', desc: 'When you remove or change the password, the new PDF keeps nothing of the old one.' },
      { icon: '🧱', name: 'Detects damaged files', desc: 'A broken PDF is no longer reported as compressed just because it is small: it tells you it could not be opened.' },
      { icon: '💻', name: 'Now in the terminal too', desc: 'All six tools as a command: pdf-tool. Install it with pipx install pdf-tool-cli.' },
      { icon: '🤖', name: 'Ready for AI agents', desc: 'A Claude Code plugin teaches it to use pdf-tool instead of writing throwaway scripts.' },
      { icon: '⏹️', name: 'And everything from 1.0', desc: 'Cancel long tasks, results with the savings for each file, keyboard shortcuts and verifiable downloads.' },
    ],
  },
  devs: {
    title: 'For developers and AI agents',
    sub: 'The same six tools as a command, with JSON output for scripts and agents. Just as local: nothing leaves your computer.',
    commands: [
      { label: 'Install the command line (Python 3.11 or later)', code: 'pipx install pdf-tool-cli' },
      { label: 'Compress a PDF to 2 MB and read the result as JSON', code: 'pdf-tool compress report.pdf --target-mb 2 --json' },
      { label: 'Install the plugin inside Claude Code', code: '/plugin marketplace add juanMaAV92/pdf-tool\n/plugin install pdf-tool@pdf-tool' },
    ],
    pypi: 'See it on PyPI →',
    docs: 'Docs on GitHub →',
  },
  install: {
    title: 'Installing it is quick',
    sub: 'Choose your system. You only need to allow it the first time.',
    macSteps: [
      'Download the <code>.dmg</code> file and open it.',
      'Drag <strong>PDF Tool</strong> to the <em>Applications</em> folder.',
      'Open it from <em>Applications</em>. macOS will show a warning because the app is not signed by Apple. Close that warning to continue.',
      'Go to <strong>Apple menu () → System Settings → Privacy &amp; Security</strong> and scroll down to the <strong>Security</strong> section.',
      'You will see a message saying <em>“pdf-tool”</em> was blocked. Click <strong>Open Anyway</strong> and confirm with your password or Touch ID. <span class="hint">Make sure you downloaded it from the official release; you only need to allow it the first time.</span>',
    ],
    winSteps: [
      'Download the <strong>installer</strong> (<code>.exe</code>) and run it.',
      'If <strong>SmartScreen</strong> appears: click <em>More info</em> → <strong>Run anyway</strong>. <span class="hint">The warning appears because the installer is not signed; make sure you downloaded it from the official release.</span>',
    ],
    verifyHtml:
      'Want to check that your download is the official one? Next to the installers is <code>SHA256SUMS.txt</code>: compare its fingerprint with your file’s using <code>shasum -a 256 &lt;file&gt;</code> on macOS or <code>Get-FileHash &lt;file&gt;</code> on Windows.',
    cta: '⬇️ Go to the downloads page',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Is it really free?', a: 'Yes. PDF Tool is 100% free, open source (MIT license), with no ads and no usage limits.' },
      { q: 'Are my files uploaded to a server?', a: 'No, never. All processing happens on your computer. Your documents never leave it.' },
      { q: 'Does it work offline?', a: 'Yes. Once installed, it doesn’t need the internet at all. Use it on a plane, in the field or wherever you want.' },
      { q: 'Why does my system show a warning when I open it?', a: 'Because the app is not signed with a paid certificate. It is completely safe —the code is open and anyone can review it—, you only need to allow it once. The exact steps for macOS and Windows are above.' },
      { q: 'Which systems does it run on?', a: 'macOS and Windows. Download the file for your system and you’re done.' },
      { q: 'How does it update?', a: 'When I publish a new version, the app tells you with a bar at the top. You download the new installer and install it over the old one; your settings are stored separately, so they are kept.' },
      { q: 'Can I use it from the terminal or with an AI agent?', a: 'Yes. Since version 1.1 there is a command line (pipx install pdf-tool-cli) with the same six tools and JSON output, and a Claude Code plugin that uses it for you. Everything still happens on your computer.' },
      { q: 'How do I know the download is the official one?', a: 'Every release publishes, next to the installers, a SHA256SUMS.txt file with each one’s fingerprint, and GitHub certifies they were built from the repository’s code. If your file’s fingerprint matches, it is exactly the published one.' },
    ],
  },
  final: {
    titleHtml: 'Download it for free.<br />No accounts, no ads, no waiting.',
    download: '⬇️ Download PDF Tool',
    code: 'See the code on GitHub',
  },
  contact: {
    eyebrow: 'Got an idea?',
    title: 'If you need a custom website, app or backend, let’s talk.',
    sub: 'Tell me what you have in mind and we’ll shape it together.',
    cta: 'Contact me →',
  },
  footer: {
    madeWithHtml:
      'Made with 🐍 Python + <a href="https://flet.dev" target="_blank" rel="noopener">Flet</a> · MIT license',
    byHtml: 'By <a href="/">Juan Manuel Armero Viveros</a>',
  },
};

export default en;
