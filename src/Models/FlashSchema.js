import mongoose from "mongoose";

const FlashSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: false,
        },
        link: {
            type: String,
            required: false,
        },
        slugName: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const flashnews = mongoose.model("flashnews", FlashSchema);
export { flashnews };
