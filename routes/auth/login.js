const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const StudentUser = require('../../modals/StudentUser');
const keys = require('../../config/keys');
const verify = require('../../middleware/verify');

module.exports = (app) => {
  app.get('/api/login', verify, async (req, res) => {
    try {
      const user = await StudentUser.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
      }
  });


  app.post(
    '/api/login',
    async (req, res) => {
      let { email, password } = req.body;
      try {
        let user = await StudentUser.findOne({ email });

        // See if user exits
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        // user.password is from database

        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Return jsonwebtokens
        let payload = {
          user: {
            id: user._id,
          },
        };

        jwt.sign(
          payload,
          keys.jwtSecret,
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.header('x-auth-token', token).json({ token });
          }
        );
      } catch (err) {
        res.status(500).send('Server Error');
        console.error(err.message);
      }
    }
  )
};