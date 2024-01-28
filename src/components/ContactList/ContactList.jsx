import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li
            className={css.contact}
            key={id}
          >
            <Contact
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ul>
  );
};
