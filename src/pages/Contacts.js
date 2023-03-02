import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { FormContacts } from 'components/FormContacts/FormContacts';
import InputFilter from 'components/InputFilter/InputFilter';
import ListContacts from 'components/ListContacts/ListContacts';
import { Loader } from 'components/Loader';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        width: '100vh',
        display: 'block',

        paddingLeft: 100,

        fontSize: 24,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <FormContacts />
      <h2>Contacts</h2>
      <InputFilter />
      {isLoading && <Loader />}
      {error && <b>Something went wrong, please reload the page</b>}
      <ListContacts />
    </div>
  );
}
