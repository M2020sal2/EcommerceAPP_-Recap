import { Schema, Types, model } from "mongoose";

// subcategory model Schema
const ReviewSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      lowecase: true,
    },
    userId: {
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
    productId: {
      type: Types.ObjectId,
      required: true,
      ref: "product",
    },
    customId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const ReviewModel = model("review", ReviewSchema);

export default ReviewModel;
