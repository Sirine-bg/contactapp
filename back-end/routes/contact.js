const User = require("../models/contact");
const express = require("express");
const router = express.Router();

//@Api http:localhost:7500/api/users
// Add new User

router.post("/", (req, res) => {
  const newUser = new User({ ...req.body });
  newUser
    .save()
    .then(() => res.send("user has been added with success"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7500/api/users
//Get All Users

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7500/api/users/id
// Get User By Id

router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  User.find({ _id })
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7500/api/users/id
//@ Delete Users by Id

router.delete("/:_id", (req, res) => {
  // let id = req.params._id
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(res.send("User has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7500/api/users/id
// Update Users by Id

router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("User has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
