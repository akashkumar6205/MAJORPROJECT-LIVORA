const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;