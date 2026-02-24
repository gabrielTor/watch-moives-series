import { Schema, model, models, Document, Model } from "mongoose";

interface IVideo extends Document {
  url: string;
  active: boolean;
}

const videoSchema = new Schema<IVideo>({
  url: String,
  active: Boolean,
});

const VideoModel: Model<IVideo> =
  (models.video as Model<IVideo>) || model<IVideo>("video", videoSchema);

export default VideoModel;
