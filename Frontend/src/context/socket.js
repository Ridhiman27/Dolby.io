import socketio from "socket.io-client";
import { createContext } from "react";

const socket = socketio.connect("http://localhost:5000");
const SocketContext = createContext();

export { socket, SocketContext };
