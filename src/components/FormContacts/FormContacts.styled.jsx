import styled from 'styled-components';
import { Form, Field } from 'formik';
export const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  font-size: 24px;
  /* border: 1px solid black; */
`;

export const InputForm = styled(Field)`
  display: block;
  padding: 10px 10px;
  width: 300px;
  background-color: white;
  border: 2px solid #4169e1;
  border-radius: 4px;
  font: 0.6em 'typewriter', sans-serif;
  color: black;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid yellow;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 20px;
  color: #4169e1;
  font: 0.7em 'typewriter', sans-serif;
`;
