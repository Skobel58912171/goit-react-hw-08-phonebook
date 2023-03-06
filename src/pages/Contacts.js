import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { FormContacts } from 'components/FormContacts/FormContacts';
import ListContacts from 'components/ListContacts/ListContacts';
import { Loader } from 'components/Loader';
import { GiBookmarklet } from 'react-icons/gi';

export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
          marginBottom: 0,
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: 1280,
          minHeight: 600,
          fontSize: 45,
          color: '#010101',
          paddingBottom: 60,
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 10,
            marginRight: 'auto',
            marginLeft: 'auto',
            fontWeight: '700',
          }}
        >
          PHONEBOOK
          <GiBookmarklet style={{ marginLeft: 5 }} />
        </h1>
        <FormContacts />
        <h2 style={{ fontSize: 36 }}>Contacts list</h2>

        {isLoading && <Loader />}
        {error && <b>Something went wrong, please reload the page</b>}
        <ListContacts />
      </div>
    </>
  );
}
