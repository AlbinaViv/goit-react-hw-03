import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number, onDelete }) => {
        return (
          <li
            className={css.contact}
            key={id}
          >
            <Contact
              name={name}
              number={number}
              onClick={onDelete}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
};
