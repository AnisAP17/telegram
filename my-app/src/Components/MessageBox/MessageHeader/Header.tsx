import React from "react";
import { ContactType } from "../../../Types";

export default function Header({
  selectedContact,
}: {
  selectedContact: ContactType;
}) {
  return (
    <div>
      <div className="">
        <img
          className="HeaderPhoto"
          width={50}
          height={50}
          src={selectedContact.img}
          alt=""
        />
        {selectedContact.name}
      </div>
    </div>
  );
}
