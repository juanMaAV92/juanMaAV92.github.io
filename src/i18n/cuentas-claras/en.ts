import type { CuentasClarasDict } from './types';

const en: CuentasClarasDict = {
  meta: {
    title: 'Cuentas Claras · Shared budgeting and investments (case study)',
    description:
      'Case study of Cuentas Claras: a self-hosted app for personal and shared budgeting and investments that replaced a Google Sheet. TypeScript, Hono, SQLite and a PWA. A project by Juan Manuel Armero Viveros.',
    ogTitle: 'Cuentas Claras · Shared budgeting and investments',
    ogDescription: 'Plan the month as a couple, see what’s left and track your net worth. A self-hosted app in real, everyday use.',
    schemaDescription:
      'Self-hosted app to plan personal and shared expenses, track them through the month, and follow investments and net worth over time.',
  },
  nav: { status: '● In use', portfolio: '← Portfolio' },
  hero: {
    eyebrow: 'Case study · self-hosted product',
    titleLead: 'Clear accounts,',
    titleEm: 'thick chocolate.',
    tagline: 'Plan the month as a couple — no spreadsheet in the middle.',
    lede:
      'It replaced the Google Sheet we used to plan our family budget. It splits up what comes in each month, shows who pays for what and how much room is left and, as a second layer, tracks investments and net worth.',
    meta: [
      { label: 'Role', value: 'Product, design, development and operations' },
      { label: 'Stack', value: 'TypeScript · React · Hono · SQLite' },
      { label: 'Status', value: 'In real use · private repo' },
    ],
  },
  showcase: {
    alt: 'Cuentas Claras home: how much is left this month, per person and per group',
    note: 'Screenshots from a local instance with made-up data.',
  },
  zoom: { label: 'Enlarge screenshot', labelPrefix: 'Enlarge screenshot: ', hint: 'Enlarge ⤢', hintFull: 'View full ⤢' },
  problem: {
    kicker: 'The problem',
    titleHtml: 'A spreadsheet is fine for <em>recording</em> what happened. The hard part is <em>deciding</em> what happens next.',
    sub: 'Every month meant copying the sheet, fixing formulas by hand and guessing who had already paid for what. It worked — as long as nobody broke a formula.',
  },
  tour: {
    kicker: 'Walkthrough',
    title: 'From the monthly plan to net worth',
    sub: 'Ana and Luis: one shared budget, a grandmother who takes part without an account, and three months of history.',
    carouselRole: 'carousel',
    carouselLabel: 'Cuentas Claras screens',
    tabsLabel: 'Choose a screen',
    prev: 'Previous screen',
    next: 'Next screen',
    trackLabel: 'Screenshots — use the arrow keys to switch',
    slideRole: 'slide',
    slideLabel: (n, total, tab) => `${n} of ${total}: ${tab}`,
    slides: [
      {
        tab: 'The month',
        alt: 'Month view with expenses by group: paid, pending in amber, and one overspend in red',
        title: 'Plan first, log later',
        caption:
          'First you allocate what comes in; then you tick off payments. Pending items show in amber, and red only appears for a real overspend. Every expense has an owner — even a grandmother who doesn’t use the app.',
      },
      {
        tab: 'Investments',
        alt: 'Investments: breakdown by asset type and positions valued in COP',
        title: 'Net worth as a second layer',
        caption:
          'CDs, ETFs, crypto and foreign currency valued in Colombian pesos at the official exchange rate, each with its own declared price provider.',
      },
      {
        tab: 'Over time',
        alt: 'Net worth month by month, broken down by asset type',
        title: 'Month by month, no copying prices',
        caption: 'Monthly net-worth snapshots by asset type, with contributions and withdrawals kept apart from returns.',
      },
      {
        tab: 'Loans',
        alt: 'Mortgage simulator with monthly payment, interest and insurance',
        title: 'Simulate before you borrow',
        caption: 'Payment, interest and insurance with every assumption in plain sight, plus extra principal payments to compare scenarios.',
      },
      {
        tab: 'First month',
        alt: 'Four-step guide to set up the first month of a new budget',
        title: 'A guide that stays out of the way',
        caption: 'Contextual four-step onboarding for the first budget, without blocking the rest of the app.',
      },
    ],
    phones: [
      { alt: 'Home screen on a phone', caption: 'Installable PWA: day-to-day use happens on the phone.' },
      { alt: 'Month view on a phone', caption: 'Marking a payment takes one tap.' },
    ],
  },
  inside: {
    kicker: 'Under the hood',
    title: 'Small in users, serious in engineering',
    sub: 'Two people use it, but it handles real money: an SPA and an API in a single container, run like production.',
    decisions: [
      {
        title: 'Zero business logic in the frontend',
        desc: 'Proration, valuations and month-end closing live in the API. The frontend only renders, backed by an end-to-end typed contract (Hono RPC).',
      },
      {
        title: 'No silent fallback between price sources',
        desc: 'Each asset has one fixed provider. If it fails, I show the last price flagged as stale rather than quietly mixing sources.',
      },
      {
        title: 'Invitation-only access',
        desc: 'Closed sign-up: single-use, hashed tokens that expire after 7 days. Any invalid token gets the same 404.',
      },
    ],
  },
  closing: {
    builtTitle: 'Already in use',
    built: ['Personal and shared budgets', 'Investments and net-worth tracking', 'Loan simulator', 'Invitations, roles and passkeys'],
    nextTitle: 'Up next',
    next: ['Subscriptions and their real yearly cost', 'Tracking a loan you already have', 'Physical assets: home and car'],
    ctaTitle: 'Software I use every month, built as if it were for many.',
    ctaBody:
      'The repository is private because it runs a product in real use. If you’d like to see the code or hear how I built it, let’s talk.',
    ctaButton: 'Let’s talk →',
  },
  footer: { brand: 'Cuentas Claras · self-hosted · in use', by: 'By' },
  lightbox: { label: 'Enlarged screenshot', close: 'Close', prev: 'Previous screenshot', next: 'Next screenshot' },
};

export default en;
