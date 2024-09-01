import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./contactlist.module.css";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact?.id}
          data={contact}
          deleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
}
