const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());

// MongoDB-yə qoşulma cəhdi
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Hafiz, serverin bazaya uğurla bağlandı! 🚀"))
  .catch(err => console.log("Bazaya qoşulma xətası:", err));

app.get('/', (req, res) => res.send("Urban Cafe API Canlıdadır!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda aktivdir.`));
