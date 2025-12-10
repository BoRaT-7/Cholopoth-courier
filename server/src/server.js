import http from "http";
import app from "./app.js";
import { Server } from "socket.io";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const server = http.createServer(app);

// Socket.IO
const io = new Server(server, { cors: { origin: "*" } });
io.on("connection", (socket) => console.log("Socket connected:", socket.id));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
