const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        default: "https://images.unsplash.com/photos-symmetrical-building-atrium-with-a-glass-skylight-looking-upwards-7xKmidpErYE",
        type: String,
        set: (v) => 
            v === "" 
        ? "https://unsplash.com/photos/symmetrical-building-atrium-with-a-glass-skylight-looking-upwards-7xKmidpErYE" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

//delete all review when listing is deleted

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;