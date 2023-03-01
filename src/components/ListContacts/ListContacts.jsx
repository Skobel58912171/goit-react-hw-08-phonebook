import { Item, List, DataContact, BtnDelete } from './ListContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact } from 'redux/operations';

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
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <DataContact>
            <span>{name}</span>: <span>{phone}</span>
          </DataContact>
          <BtnDelete
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </BtnDelete>
        </Item>
      ))}
    </List>
  );
};

export default ListContacts;
