const fs = require("fs");
const path = require("path");

const imagesDirectory = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "brands"
);
let showMainPage = (req, res) => {
  return res.render("mainpage");
};

const getImageUrls = (req, res) => {
  const imageFiles = fs.readdirSync(imagesDirectory);
  const imageUrls = imageFiles.map((image) => `${image}`);
  res.json({ images: imageUrls });
};

module.exports = {
  showMainPage: showMainPage,
  getImageUrls: getImageUrls,
};
