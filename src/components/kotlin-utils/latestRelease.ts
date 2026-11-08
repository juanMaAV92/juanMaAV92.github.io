// Última versión publicada en GitHub Releases, consultada una sola vez por build
// (la página se renderiza en cada idioma y no queremos gastar el rate limit dos veces).
const FALLBACK_VERSION = '0.1.0';

export type LatestRelease = { version: string; publishedAt: string | null };

let cached: Promise<LatestRelease> | undefined;

async function load(): Promise<LatestRelease> {
  let version = FALLBACK_VERSION;
  let publishedAt: string | null = null;
  try {
    const res = await fetch('https://api.github.com/repos/juanMaAV92/kotlin-utils/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.tag_name) version = String(data.tag_name).replace(/^v/, '');
      if (data.published_at) publishedAt = new Date(data.published_at).toISOString().slice(0, 10);
    }
  } catch {
    // network error / rate limit → keep fallback
  }
  return { version, publishedAt };
}

export function getLatestRelease(): Promise<LatestRelease> {
  return (cached ??= load());
}
