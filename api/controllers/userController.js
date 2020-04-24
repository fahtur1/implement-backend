const mongoose = require("mongoose");
const User = require("./../models/User");

exports.userFindAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
  // User.find()
  //   .exec()
  //   .then(users => {
  //     res.status(200).json({
  //       message: "All user",
  //       users
  //     });
  //   })
  //   .catch(err => {
  //     res.status(500).json({
  //       message: "error",
  //       error: err
  //     });
  //   });
};

exports.userFindById = async (req, res) => {
  try {
    const id = req.params.id_user;
    const user = await User.findById(id);

    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.userSave = (req, res) => {
  const body = req.body;
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    u_name: body.u_name,
    u_umur: body.u_umur,
    u_email: body.u_email,
    u_password: body.u_password,
  });

  user
    .save()
    .then((data) => {
      res.status(200).json({
        message: "add new user",
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something is wrong !",
        error: err,
      });
    });
};

exports.userPatch = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await User.findOneAndUpdate({ _id: id }, body);
    res.status(200).json({
      message: "Update user success",
    });
  } catch (err) {
    res.status(200).json({
      error: err,
    });
  }
};

exports.userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findOneAndRemove({ _id: id });
    res.status(200).json({
      message: "Delete user successful",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
