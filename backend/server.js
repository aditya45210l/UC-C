import http from "http";
import { app } from "./app.js";
import { PORT } from "./lib/env.js";

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server lissten on port:${PORT}`);
});
