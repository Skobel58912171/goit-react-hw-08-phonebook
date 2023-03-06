import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { FormData, InputForm, Title } from './RegisterForm.styled';
import { Button } from '@chakra-ui/button';
YupPassword(yup);

const initialValues = { name: '', email: '', password: '' };
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});

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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (user, { resetForm }) => {
    dispatch(register(user));
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        alidationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormData>
          <Title>Registration</Title>
          <label>
            Username
            <InputForm
              type="text"
              name="name"
              placeholder="Enter
        username"
            />
            <FormError name="name" component="div" />
          </label>
          <label>
            Email
            <InputForm
              type="email"
              name="email"
              placeholder="Enter
        email"
            />
            <FormError name="email" component="div" />
          </label>
          <label>
            Password
            <InputForm
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <FormError name="password" component="div" />
          </label>

          <Button
            size="md"
            height="48px"
            width="300px"
            colorScheme="blue"
            type="submit"
            marginTop={5}
            fontSize="20px"
          >
            Register
          </Button>
        </FormData>
      </Formik>
    </>
  );
};
