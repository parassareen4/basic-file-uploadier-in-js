const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the original file name
  },
});

const upload = multer({ storage: storage });

// Define the upload route
router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Optionally, send back the file details
  res.send({
    message: "File uploaded successfully!",
    file: req.file,
  });
});

module.exports = router;
