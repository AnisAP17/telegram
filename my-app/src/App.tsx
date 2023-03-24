// import logo from './logo.svg';
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import MessageBox from "./Components/MessageBox/MessageBox";
import { ContactType } from "./Types";

function App() {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem("selectedContact", JSON.stringify(selectedContact));
  }, [selectedContact]);

  const chooseContact = (contact: ContactType) => {
    setSelectedContact(contact);
  };

  return (
    <div className="AppFlex">
      <div className="ContactBackground">
        <Contacts chooseContact={chooseContact} />
      </div>
      {selectedContact && (
        <div>
          <MessageBox selectedContact={selectedContact} />
        </div>
      )}
      {!selectedContact && (
        <div>
          <div className="AppHeaderBackground"></div>
          <div className="AppListBackground">Choose Contact</div>
        </div>
      )}
    </div>
  );
}

export default App;
