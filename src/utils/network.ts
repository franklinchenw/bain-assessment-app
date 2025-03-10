let cachedIP: string | null = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export async function getUserIP() {
  if (cachedIP) return cachedIP;

  try {
    const response = await fetch("https://1.1.1.1/cdn-cgi/trace");
    const data = await response.text();

    const parser = data.split("\n").reduce((acc, line) => {
      const [key, value] = line.split("=");
      return { ...acc, [key]: value };
    }, {} as Record<string, string>);

    cachedIP = parser.ip;

    // Clear cache after duration
    setTimeout(() => {
      cachedIP = null;
    }, CACHE_DURATION);

    return cachedIP;
  } catch (error) {
    console.error("Error fetching IP from Cloudflare:", error);
    return null;
  }
}
