const http = require('http');
const fs = require('fs');

const port = 3000;
const myUrl = new URL("http://localhost:3000/");

const server = http.createServer((req, res) => {

        function handlePath(filePath) {
                fs.readFile(filePath, (err, data) => {
                        if (err) {
                                console.log(err);
                                return;
                        }
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.end();
                })
        }
        if (req.url === "/") {
                handlePath('index.html');
        }

        else if (req.url === "/about") {
                handlePath('about.html')
        }

        else if (req.url === "/contact-me") {
                handlePath('contact-me.html');
        }
        else {
                handlePath('404.html');
        }
});


server.listen(port, () => {
        console.log(`Server running at ${port}`);
});

