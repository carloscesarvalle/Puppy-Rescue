const router = require("express").Router();
const Dog = require("../models/Dog.model");

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.get("/dogs", (req, res, next) => {
  Dog.find().then((dogs) => {
    res.json({ dogs });
  });
});

router.post("/vote", (req, res, next) => {
  Dog.findByIdAndUpdate().then((dog) => {
    res.json({ dog });
  });
});

router.post("/addDogs", (req, res, next) => {
  Dog.create(req.body).then((newdog) => {
    res.json({ newdog });
  });
});

module.exports = router;
