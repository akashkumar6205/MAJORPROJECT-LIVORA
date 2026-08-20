const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError= require("../utils/ExpressError");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner} = require("../middleware.js");
const { validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        validateListing, 
        wrapAsync(listingController.CreateListing)
    );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.ShowListing))
    .put(
        isLoggedIn,
        isOwner,
        validateListing,
        wrapAsync(listingController.UpdateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.DeleteListing));

//Edit Route
router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.EditListing));


module.exports = router;