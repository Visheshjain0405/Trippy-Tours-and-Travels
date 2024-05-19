const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
//Routes

router.post("/user/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !name || !password) {
    res.status(400).json({ error: "enter all input data" });
  }
  try {
    // red email is database email and blue email is frontend email
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      res
        .status(400)
        .json({ error: "this user already exits in your database" });
    } else {
      const userregister = new users({
        //   write all name direct bacuse frontend key and backend key is same
        name,
        email,
        password,
      });

      //here password hasing
      const storeddata = await userregister.save();
      res.status(200).json(storeddata);
    }
  } catch (error) {
    res.status(400).json({ error: "error", error });
  }
});

module.exports = router;
