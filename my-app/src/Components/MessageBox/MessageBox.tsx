import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { ContactType, MessageType } from "../../Types";
import Header from "./MessageHeader/Header";
import Input from "./MessageInput/Input";
import List from "./MessageList/List";

export default function MessageBox({
  selectedContact,
}: {
  selectedContact: ContactType;
}) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    if (selectedContact.id) {
      fetch(`http://localhost:4000/message-get/${selectedContact.id}/2000`)
      .then((response) => response.json())
      .then((json) => setMessages(json));      
    }
  }, [selectedContact]);

  const addMessage = (message: MessageType) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <div className="HeaderBackground">
        <div>
          <Header selectedContact={selectedContact} />
        </div>
      </div>
      <div className="ListBackground ">
        <List messages={messages} selectedContact={selectedContact} />
      </div>
      <div className="InputBackground">
        <Input addMessage={addMessage} selectedContact={selectedContact} />
      </div>
    </div>
  );
}
