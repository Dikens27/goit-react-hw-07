import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.miniContainer}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
