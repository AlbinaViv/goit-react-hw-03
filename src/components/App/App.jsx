import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import contact from "/src/contact.json";

export const App = () => {
  const ContactUser = (name) => {
    console.log(name);
  };

  // const [inputValue, setInputValue] = useState("");

  const SearchUser = (value) => {};

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm onSubmit={ContactUser} /> */}
      <SearchBox
        value={inputValue}
        // setInputValue={setInputValue}
      />
      <ContactList contact={contact} />
    </div>
  );
};

export default App;
