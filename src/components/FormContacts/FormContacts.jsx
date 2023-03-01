import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Btn, Label, InputForm, FormData } from './FormContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selector';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().min(9).max(12).required(),
});

const initialValues = { name: '', phone: '' };

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
          <InputForm type="tel" name="phone" placeholder="345-45-45" />
          <FormError name="phone" component="div" />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </FormData>
    </Formik>
  );
};
