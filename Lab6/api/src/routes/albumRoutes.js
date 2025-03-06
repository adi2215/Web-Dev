const express = require("express");
const router = express.Router();
const albumController = require("../controllers/albumController.js");

router.get("/", albumController.getAlbums);
router.get("/:id", albumController.getAlbumById);
router.get("/:id/photos", albumController.getPhotos);
router.patch("/:id", albumController.patchAlbum);
router.delete("/:id", albumController.deleteAlbum);

module.exports = router;
