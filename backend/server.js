const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işləyir...`);
});