import { Schema, model, models, Document, Model } from "mongoose";

interface IAdmin extends Document {
  email: string;
  password: string;
}

const adminSchema = new Schema<IAdmin>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel: Model<IAdmin> =
  (models.admin as Model<IAdmin>) || model<IAdmin>("admin", adminSchema);

export default AdminModel;
