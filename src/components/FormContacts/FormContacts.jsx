import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Btn, Label, InputForm, FormData } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(13).required(),
});

const initialValues = { name: '', number: '' };

export const ErrorText = styled.p`
  font: 0.6em 'typewriter', sans-serif;
  color: red;
  margin-top: 5px;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const FormContacts = () => {
  const dispatch = useDispatch();

  const allContacts = useSelector(getContacts);

  const handleSubmit = (contact, { resetForm }) => {
    // e.preventDefault();

    if (allContacts.some(item => item.name === contact.name)) {
      alert(`Contact ${contact.name} already exist`);
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormData>
        <Label>
          Name
          <br />
          <InputForm type="text" name="name" placeholder="Rosie Simpson" />
          <FormError name="name" component="div" />
        </Label>
        <Label>
          Number
          <br />
          <InputForm type="tel" name="number" placeholder="+380673454545" />
          <FormError name="number" component="div" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </FormData>
    </Formik>
  );
};
