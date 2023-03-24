import React from "react";
import { ContactType, MessageType } from "../../../Types";

export default function List({
  messages,
  selectedContact,
}: {
  messages: MessageType[];
  selectedContact: ContactType;
}) {
  const filterMessages = messages.filter((message) => {
    return (
      (message.receiverId === selectedContact.id &&
        message.senderId === 2000) ||
      (message.receiverId === 2000 && message.senderId === selectedContact.id)
    );
  });

  return (
    <div className="ListScroll">
      {filterMessages.map((sms) => {
        return (
          <div key={sms.id} className="ListFlex">
            <div className="ListMessage ">{sms.text}</div>
          </div>
        );
      })}
    </div>
  );
}
