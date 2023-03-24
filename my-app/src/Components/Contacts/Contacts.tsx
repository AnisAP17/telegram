import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { ContactType } from "../../Types";
// import { contacts } from "../../mochData/contacts"

export default function Contacts({
  chooseContact,
}: {
  chooseContact: (contact: ContactType) => void;
}) {
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useState<ContactType[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((response) => response.json())
      .then((json) => setContacts(json));
  }, []);
  return (
    <div>
      <div className="ContactFlex">
        <img src="./telegram.svg" alt="" width={20} height={20} />
        <input
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {contacts &&
        contacts
          .filter((post) => {
            if (query === "") {
              return post;
            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          })
          .map((contact) => {
            return (
              <div key={contact.id}>
                <div
                  className="ContactCursor"
                  onClick={() => chooseContact(contact)}
                >
                  <img
                    className="ContactPhoto"
                    width={50}
                    height={50}
                    src={contact.img}
                    alt=""
                  />
                  {contact.name}
                </div>
              </div>
            );
          })}
    </div>
  );
}
