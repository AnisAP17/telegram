import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactType, MessageType } from "../../../Types";

export default function Input({
  addMessage,
  selectedContact,
}: {
  addMessage: (message: MessageType) => void;
  selectedContact: ContactType;
}) {
  const [newMessage, setNewMessage] = useState<MessageType>({
    text: "",
    id: "",
    senderId: 0,
    receiverId: 0,
  });

  const onNewMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let message = {
      text: e.target.value,
      id: uuidv4(),
      senderId: 2000,
      receiverId: selectedContact.id,
    };
    setNewMessage(message);
  };

  const sendMessage = () => {
    if (newMessage.text === "") {
      alert(`Write text to ${selectedContact.name}`);
    } else {
      fetch(`http://localhost:4000/message-create`, {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      addMessage(newMessage);
      setNewMessage({ ...newMessage, text: "" });
    }
  };

  return (
    <div>
      <input
        onChange={(e) => onNewMessage(e)}
        className="InputWidth"
        type="text"
        value={newMessage.text}
      />
      <input
        onClick={sendMessage}
        className="InputButton"
        type="button"
        value="send"
      />
    </div>
  );
}
