const express = require("express");

const {
  userFindAll,
  userFindById,
  userSave,
  userPatch,
  userDelete,
} = require("./../controllers/userController");

const router = express.Router();

// get all users
router.get("/", userFindAll);

// get user by id
router.get("/:id_user", userFindById);

// add user
router.post("/", userSave);

// update user
router.patch("/:id", userPatch);

// delete user
router.delete("/:id", userDelete);

module.exports = router;
