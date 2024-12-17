import mongoose from "mongoose";

const SocietyRegSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  institution_name: {
    type: String,
    required: true,
  },
  societies: {
    type: [String],
    enum: [
      "Readers & Writers",
      "Dramatic & Alliance",
      "Beats & Buzz",
      "Sports",
      "Science & Tech",
      "Arts & Culture",
      "Social Impact",
      "Entrepreneurship",
      "Finance",
      "Debating & Public Speaking",
      "Psych Aquad",
      "International Relations",
      "Media & Journalism",
      "Gaming & Esports",
      "Music",
      "Community Service",
    ],
    required: true,
  },
});

export const societyRegSchema = mongoose.model(
  "SocietyRegSchema",
  SocietyRegSchema
);
