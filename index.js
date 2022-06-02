const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
})

app.get("/about", (req, res) => {
        res.sendFile(path.join(__dirname, '/about.html'));
})

app.get("/contact-me", (req, res) => {
        res.sendFile(path.join(__dirname, '/contact-me.html'));
})

app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, '/404.html'));
})

app.listen(port, () => {
        console.log(`Example app running on ${port}`);
})


//
// function handlePath(filePath) {
//         fs.readFile(filePath, (err, data) => {
//                 if (err) {
//                         console.log(err);
//                         return;
//                 }
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.write(data);
//                 res.end();
//         })
// }
// if (req.url === "/") {
//         handlePath('index.html');
// }
//
// else if (req.url === "/about") {
//         handlePath('about.html')
// }
//
// else if (req.url === "/contact-me") {
//         handlePath('contact-me.html');
// }
// else {
//         handlePath('404.html');
// }

