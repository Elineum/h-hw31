import React from "react";
import contactsData from "../../mockDatas/contactsData";
import "./Contacts.scss";

export const Contacts = () => {
  return (
    <ul className="contacts">
      {contactsData.map((person, index) => (
        <li className="contacts__item" key={index}>
          <div>
            <b className="contacts__name">{person.name}, </b>
            <span className="contacts__position">{person.position}</span>
          </div>
          <a href={`mailto:${person.email}`} className="contacts__link">
            {person.email}
          </a>
          <a href={`tel:${person.phone}`} className="contacts__link">
            {person.phone}
          </a>
        </li>
      ))}
    </ul>
  );
};
