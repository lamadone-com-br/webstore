const staticPaths = new Set(["/_headers","/_redirects","/account-background.png","/asset_placeholder.webp","/cube-logo-small.webp","/favicon.ico","/homepage.webp","/logo-144-144.png","/logo-192-192.png","/logo-48-48.png","/logo-512-512.png","/logo-72-72.png","/logo-96-96.png","/manifest.json","/q-insights.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/service-worker.js","/social-image.png","/user-icon.webp"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };