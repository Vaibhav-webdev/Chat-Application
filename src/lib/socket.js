import { io } from "socket.io-client"

const socket = io("https://chat-app-backend-6zq4.onrender.com", {
  withCredentials: true,
  transports: ["websocket", "polling"],
  autoConnect: false,
});


export default socket