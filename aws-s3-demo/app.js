require('dotenv').config();


const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const path = require('path');

// 2. Express uygulamaamız
const app = express();
const port = 3000;

// 3. AWS S3 configuration burada(ben dotenv ile refer ettim .env dosyama)
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// 4. Multer ayarları
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Dosya boyutunu 5MB'a sınırlıyoruz -Medium yazısı
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are accepted.'), false);
    }
  }
});

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('Pick a document to send.');
  }

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  try {
    await s3.upload(params).promise();
    res.status(200).send('Your file is uploded successfully to Amazon S3!');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occured while uploding it to Amazon S3.');
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
