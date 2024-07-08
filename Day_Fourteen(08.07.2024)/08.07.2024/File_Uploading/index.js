const path = require("path");
const express = require("express");
const multer = require("multer");
const fs = require('fs');

const app = express();
const PORT = 3000;

const uploadDir = path.join(__dirname, 'uploads');
console.log(`Upload directory: ${uploadDir}`);
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log(`Created upload directory: ${uploadDir}`);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully.');
});

app.post("/uploadMultiple", upload.array('myFiles', 12), (req, res) => {
    console.log(req.file);
    res.send('Files uploaded successfully.');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server Started at PORT:${PORT}`);
});

