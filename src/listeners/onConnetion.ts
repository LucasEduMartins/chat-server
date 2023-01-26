import { Socket } from "dgram";
import messageListeners from "./messages/messageListeners";

export default function onConnection(socket) {
  messageListeners(socket);
}
