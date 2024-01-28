import { useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
// import contact from "/src/contact.json";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const filteredContacts = contacts.filter((contacts) =>
    contacts.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(filteredContacts);

  const ContactUser = (name) => {
    console.log(name);
  };

  const SearchUser = (value) => {};

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
