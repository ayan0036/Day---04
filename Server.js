 const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { name, course } = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (name && course) {
    res.end(`Hello ${name}! You have enrolled in ${course} course.`);
  } else {
    res.end('Please provide both name and course in query parameters.');
  }
});

server.listen(3000, () => {
  console.log('Server chal raha hai at http://localhost:3000');
});
