import React from "react";
import "./index.css";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      <div className="list">
        {contacts.map(contact => (
          <div className="card" key={contact.id}>
            <div className="body">
              <div className="title">{contact.name}</div>
              <div className="email">{contact.email}</div>
              <p className="text">{contact.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
