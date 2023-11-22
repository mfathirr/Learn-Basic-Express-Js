require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const usersRoutes = require('./routes/users.js');
const middleware = require('./middleware/log.js');
const { upload } = require('./middleware/multer.js');

const app = express();

app.use(middleware.logRequest);
app.use(express.json());
app.use(express.static('public'));

// use digunakan untuk seluruh method (GET, POST, dll)
app.use('/users', usersRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
  if (req.file === undefined ) {
    res.json({
      message: 'Masukkan gambar nya terlebih dahulu',
    });
  }
  res.json({
    message: 'Uplaod Berhasil',
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

// untuk menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
