import { Button } from '@chakra-ui/button';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styled from 'styled-components';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { Title, FormData, InputForm } from './LoginForm.styled';
YupPassword(yup);

const initialValues = { email: '', password: '' };
const schema = yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (user, { resetForm }) => {
    dispatch(logIn(user));
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
          <Title>Log in</Title>
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
            Log In
          </Button>
        </FormData>
      </Formik>
    </>
  );
};

export default LoginForm;
