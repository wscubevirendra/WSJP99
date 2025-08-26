const { readFileSync, readFile } = require('fs');
const http = require('http');
const url = require('url')


const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true)
        const path = urlParser.pathname
        if (path === "/home") {
            readFile('index.html', 'utf-8', (err, data) => {
                if (err) {
                    res.end("File not found")
                } else {
                    res.end(data)
                }
            })
        } else if (path == "/about") {
            readFile('about.html', 'utf-8', (err, data) => {
                if (err) {
                    res.end("File not found")
                } else {
                    res.end(data)
                }
            })
        } else {
            const data = readFileSync("not-found.html", 'utf-8')
            res.end(data)
        }

    }
)

server.listen(
    5100,
    () => {
        console.log("Server started")
    }
)