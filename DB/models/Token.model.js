import mongoose, { model, Schema, Types } from "mongoose";

// Token model Schema
const tokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userID: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },

    isvalid: {
      type: Boolean,
      default: true,
    },
    expiredAt: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const tokenmodel =
  mongoose.models.tokenmodel || model("token", tokenSchema);
