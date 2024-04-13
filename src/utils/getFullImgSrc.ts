export const LOGO =
  "https://watch-moives-series.vercel.app/_next/static/media/logo.f6b134ba.svg";

const getSrc = (path: string) => {
  if (!path) return LOGO;
  return `https://image.tmdb.org/t/p/original${path}`;
};

export default getSrc;
