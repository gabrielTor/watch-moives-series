"use server";
import connectDB from "@/config/config";

export async function getMovies() {
  try {
    await connectDB();

    return;
  } catch (error) {
    console.log(error);
  }
}
