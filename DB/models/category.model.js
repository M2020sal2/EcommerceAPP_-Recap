import { Schema, Types, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, " name is required"],
      unique: [true, "name must be unique"],
      lowercase: true,
      minlength: [3, "name length is too short"],
      maxlength: [32, "to long category name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    createdBy: {
      type: Types.ObjectId,
      required: true,
      ref: "user",
    },
    Images: {
      public_id: {
        required: true,
        type: String,
      },
      secure_url: {
        required: true,
        type: String,
      },
    },
    customId: {
      type: String,
      unique: true,
    },
    updatedBy: {
      type: Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const categoryModel = model("category", categorySchema);

export default categoryModel;
