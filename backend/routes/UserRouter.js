const User = require("../models/User");
const bcrypt = require("bcryptjs");
var express = require("express");
var router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const active = req.body.active ?? true;

    // E-posta adresi zaten varsa hata döndür
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // E-posta yoksa, yeni kullanıcı oluştur
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User Created!!", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // E-postaya göre kullanıcıyı bul

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        // Hata yönetimi yapılır
      } else if (result) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
