"use server";

import connectDB from "@/config/db";
import VideoModel from "@/models/videoDomain";

interface VideoDoc {
  _id: string;
  url: string;
  active: boolean;
  language: "en" | "es";
}

export async function getVideosAction(): Promise<VideoDoc[]> {
  await connectDB();
  const videos = await VideoModel.find().lean();
  return videos.map((v) => ({
    _id: v._id.toString(),
    url: v.url ?? "",
    active: v.active ?? false,
    language: (v.language as "en" | "es") ?? "en",
  }));
}

export async function getActiveLinks(): Promise<{ en: string; es: string }> {
  try {
    const connected = await connectDB();
    if (!connected) return { en: "", es: "" };
    const [enDomain, esDomain] = await Promise.all([
      VideoModel.findOne({ active: true, language: "en" }).select("url").lean(),
      VideoModel.findOne({ active: true, language: "es" }).select("url").lean(),
    ]);
    return {
      en: enDomain?.url ?? "",
      es: esDomain?.url ?? "",
    };
  } catch {
    return { en: "", es: "" };
  }
}

/** @deprecated use getActiveLinks */
export async function getActiveLink(): Promise<string> {
  const { en } = await getActiveLinks();
  return en;
}

export async function addVideoAction(
  url: string,
  language: "en" | "es" = "en"
): Promise<void> {
  await connectDB();
  await VideoModel.create({ url, active: true, language });
}

export async function toggleVideoAction(id: string): Promise<void> {
  await connectDB();
  const video = await VideoModel.findById(id);
  if (!video) return;
  video.active = !video.active;
  await video.save();
}

export async function deleteVideoAction(id: string): Promise<void> {
  await connectDB();
  await VideoModel.findByIdAndDelete(id);
}
