"use server";

import connectDB from "@/config/db";
import VideoModel from "@/models/videoDomain";

interface VideoDoc {
  _id: string;
  url: string;
  active: boolean;
}

export async function getVideosAction(): Promise<VideoDoc[]> {
  await connectDB();
  const videos = await VideoModel.find().lean();
  return videos.map((v) => ({
    _id: v._id.toString(),
    url: v.url ?? "",
    active: v.active ?? false,
  }));
}

export async function getActiveLink(): Promise<string> {
  await connectDB();
  const videoDomain = await VideoModel.findOne({ active: true })
    .select("url")
    .lean();
  return videoDomain?.url ?? "";
}

export async function addVideoAction(url: string): Promise<void> {
  await connectDB();
  await VideoModel.create({ url, active: true });
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
