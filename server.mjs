import { createServer } from 'node:http';

const PORT = process.env.PORT || 8080;

const server = createServer((req, res) => {

  // Perform a temporary redirect
  res.writeHead(200);
  res.end();
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
