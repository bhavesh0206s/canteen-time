const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const StudentUser = require("../../modals/StudentUser");
const TeacherUser = require("../../modals/TeacherUser");
const keys = require("../../config/keys");
const verify = require("../../middleware/verify");

module.exports = (app) => {
  app.get("/api/login/:type", verify, async (req, res) => {
    try {
      let TheModelType;
      if (req.params.type === "student") {
        TheModelType = StudentUser;
      } else {
        TheModelType = TeacherUser;
      }
      const user = await TheModelType.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  app.post("/api/login/:type", async (req, res) => {
    let { email, password } = req.body;
    try {
      let TheModelType;
      if (req.params.type === "student") {
        TheModelType = StudentUser;
      } else {
        TheModelType = TeacherUser;
      }

      let user = await TheModelType.findOne({ email });

      // See if user exits
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      // user.password is from database

      if (!isMatch) {
        return (
          res
            .status(400)
            // .json({ errors: [{ msg: "Invalid credentials" }] });
            .json({ errors: [{ msg: "password to thik daal" }] })
        );
      }

      // Return jsonwebtokens
      let payload = {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      };

      jwt.sign(payload, keys.jwtSecret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.header("x-auth-token", token).json({ token });
      });
    } catch (err) {
      res.status(500).send("Server Error");
      console.error(err.message);
    }
  });
};
