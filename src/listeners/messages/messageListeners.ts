type Message = {
  message: string;
  owner: string;
};
type onSendMessageCallback = (data: Message) => void;

const messages: Message[] = [];

export default function messageListeners(socket): void {
  function onSendMessage(data: Message, callback?: onSendMessageCallback) {
    messages.push(data);
    socket.broadcast.emit("sendMessage", data);

    if (callback) callback(data);
  }

  function onMessageTyping() {
    socket.broadcast.emit("messageTyping", messages);
  }

  socket.on("sendMessage", onSendMessage);
  socket.on("messageTyping", onMessageTyping);
}
