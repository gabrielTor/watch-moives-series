import { getPlaiceholder } from "plaiceholder";
import getSrc from "./getFullImgSrc";

export default async function getBase64Url(imageUrl: string) {
  if (!imageUrl) return "";
  try {
    const res = await fetch(getSrc(imageUrl));

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}
