import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contacts={contact} />
        </li>
      ))}
    </ul>
  );
}
