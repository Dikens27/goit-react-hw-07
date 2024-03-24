import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectFilters } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contacts={contact} />
        </li>
      ))}
    </ul>
  );
}
