import { List } from './ListContacts.styled';
import ItemContact from 'components/ItemContact/ItemContact';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import InputFilter from 'components/InputFilter/InputFilter';

const getFilteredContacts = (contacts, filterValue) => {
  const normalizedFilter = filterValue.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

const ListContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <>
      <InputFilter />
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <ItemContact
            key={id}
            id={id}
            name={name}
            number={number}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          />
        ))}
      </List>
    </>
  );
};

export default ListContacts;
