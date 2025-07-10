import mongoose from "mongoose";

const BlackListedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    index: { expires: 0 },
  },
});

const BlackListedToken = mongoose.model(
  "BlackListedToken",
  BlackListedTokenSchema
);

export default BlackListedToken;
