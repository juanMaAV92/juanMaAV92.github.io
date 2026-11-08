import type { SteerDict } from './types';

const en: SteerDict = {
  meta: {
    title: 'Steer · The simplicity of a PaaS, on your own AWS · case study',
    description:
      'Case study of Steer: an open-source Go CLI + TUI that brings PaaS-like deploys to your own AWS account. Guardrails, interactive deploys, single binary. Alpha v0.1 released, by Juan Manuel Armero Viveros.',
    ogTitle: 'Steer · The simplicity of a PaaS, on your own AWS',
    ogDescription: 'Open-source Go CLI + TUI for fearless deploys to the cloud you already own. Case study.',
    twitterDescription: 'Open-source Go CLI + TUI for fearless deploys to the cloud you already own.',
  },
  nav: { status: '● Alpha · v0.1.1', docs: 'Docs', github: 'GitHub ↗', portfolio: '← Portfolio' },
  hero: {
    eyebrow: 'Open-source dev tool · CLI + TUI',
    titleLine1: 'The simplicity of a PaaS,',
    titleHl: 'on your own AWS',
    titleEnd: '.',
    lede:
      'Platforms like Vercel and Railway made shipping effortless, but they lock you in. Steer brings that same “just ship it” feeling to the AWS account you already own. Set it up once; then anyone on the team deploys, without touching the console.',
    ctaGithub: 'View on GitHub ↗',
    ctaDocs: 'Read the docs →',
    ctaHow: 'See how it works ↓',
    termLabel: 'Steer TUI preview',
  },
  how: {
    kicker: 'Two faces, one helm',
    title: 'Scriptable for the lead, friendly for the team',
    cliTitle: 'CLI: for pipelines & the lead',
    cliComment: '# scriptable, CI-friendly, no prompts',
    cliBody: 'First-class in CI. Every action is a flag away, deterministic and safe to automate.',
    tuiTitle: 'TUI: for everyone else',
    tuiComment1: '# run a command with no args →',
    tuiComment2: '# an interactive picker opens',
    tuiBody:
      'A persistent dashboard with interactive pickers and an in-TUI context switcher. Ship without knowing the AWS console underneath.',
  },
  highlights: {
    kicker: 'What it does',
    title: 'Removes the fear, not the control',
    items: [
      { icon: '🛡️', title: 'Guardrails by default', desc: 'Read-only production, confirmations and a preview of what will happen before it happens. Rollback is one command, so accidental damage is hard to cause.' },
      { icon: '🚀', title: 'Interactive deploys', desc: 'Pick services and image tags from live, fuzzy-filtered lists. The tag picker reads your registry, and every deploy is validated against it before it runs. Stuck rollouts are detected, not waited on forever.' },
      { icon: '📊', title: 'Hybrid TUI', desc: 'The health of everything at a glance in a persistent multi-panel layout. It is keyboard-driven, mouse-friendly, with live Events and Logs tabs per service. Switch account or environment from inside the TUI. Inspired by lazydocker / lazygit.' },
      { icon: '💬', title: 'Errors that teach', desc: 'Failures explain what went wrong, why, and what to try next instead of dumping a raw cloud stack trace on you.' },
      { icon: '⚙️', title: 'Config-driven', desc: 'An interactive wizard (steer config init) detects your AWS profiles, lists your real clusters and writes steer.toml for you. Several accounts or environments are just several contexts.' },
      { icon: '📦', title: 'Single binary', desc: 'Install via Homebrew, go install or a direct download. One static Go binary with no runtime to manage.' },
    ],
  },
  who: {
    kicker: 'Who it’s for',
    title: 'One person owns the cloud. Everyone else just ships.',
    leadTag: 'The lead',
    leadHtml: 'Configures <code>steer.toml</code> once: accounts, role ARNs, environments, naming conventions.',
    teamTag: 'The team',
    teamHtml: 'Deploys, scales and checks status with simple commands and the TUI, <strong>without understanding the AWS console underneath</strong>.',
    honest:
      'Honest scope: a solo dev with nobody to do the one-time setup is better served by a managed PaaS. Steer shines when someone owns the AWS setup and hands the team a safe, simple way to deploy on top of it.',
  },
  tech: {
    kicker: 'Under the hood',
    title: 'Built for AWS today',
    note: 'The core leaves room for future cloud adapters, without pretending they are ready now.',
    stack: [
      { k: 'Language', v: 'Go, single static binary' },
      { k: 'TUI', v: 'Bubble Tea · Lipgloss · Bubbles' },
      { k: 'Cloud', v: 'AWS SDK (ECS), capability-driven core' },
      { k: 'Config', v: 'TOML: accounts, roles, envs, naming' },
      { k: 'Release', v: 'GoReleaser · Homebrew · direct download' },
      { k: 'Quality', v: 'TDD per component, deterministic renders' },
      { k: 'Reference infra', v: 'keel-infra: Terraform modules (VPC, ECR, ECS, ALB, service)' },
    ],
    decisionsTitle: 'Engineering decisions',
    decisions: [
      { title: 'AWS-first by design', desc: 'Steer is built for AWS today. Commands are named by capability (deploy, scale, rollback), not by individual AWS services, so future adapters can be added without rewriting the workflow. Multi-cloud is a deliberate next step, not a supported feature yet.' },
      { title: 'Composed TUI, not a monolith', desc: 'The Bubble Tea UI is split into single-responsibility components (sidebar, panel tabs, action overlay, keymap, styles), each rendering to a deterministic string so it can be unit-tested without a real terminal.' },
      { title: 'Two faces, one core', desc: 'TUI and CLI share the same domain core. The lead scripts deploys in CI (steer --context stg service deploy -s api -t v1.2.3 -y); the team uses the interactive TUI. Neither path forks the logic.' },
      { title: 'Safety is structural', desc: 'Production is read-only unless explicitly writable; destructive actions require confirmation and show a preview. The guardrails live in the core, so both the CLI and the TUI inherit them.' },
    ],
  },
  cta: {
    title: 'Alpha, released and usable today.',
    body: 'The service vertical (deploy, scale, rollback, status, logs, events) ships in v0.1. Registry, databases and more capabilities stay on the public roadmap. It’s open source: take a look, or reach out if you want to talk.',
    github: 'View on GitHub ↗',
    contact: 'Get in touch →',
  },
  foot: { line: 'Steer · open source (MIT) · alpha v0.1', by: 'By' },
  docs: {
    titleSuffix: 'steer docs',
    github: 'GitHub ↗',
    projectPage: '← Project page',
    sideAria: 'Documentation pages',
    sideTitle: 'documentation',
    sideBack: '← project page',
    kicker: 'steer docs',
    pagerAria: 'Previous and next page',
    tocAria: 'On this page',
    tocTitle: '# on this page',
    foot: 'Steer · open source (MIT)',
    by: 'By',
  },
};

export default en;
