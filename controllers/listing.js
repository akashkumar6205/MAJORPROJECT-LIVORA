const Listing = require("../models/listing");


module.exports.index = async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.ShowListing= async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews", 
        populate: {
            path: "author",
        },
    })
    .populate("owner");
        if(!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }
        console.log(listing);
        res.render("listings/show.ejs", {listing});
    };

module.exports.CreateListing = async (req, res, next) => {
    const { image, ...listingData } = req.body.listing;
    const newListing = new Listing(listingData);
    newListing.owner = req.user._id;
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.EditListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.DeleteListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id); 
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.UpdateListing = async (req, res) => {
    let {id} = req.params;
    const { image, ...listingData } = req.body.listing;
    const update = {...listingData};
    if (req.file) {
        update.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
    }
    await Listing.findByIdAndUpdate(id, update);
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};