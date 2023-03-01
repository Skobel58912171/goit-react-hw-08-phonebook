import styled from 'styled-components';
import { Form, Field } from 'formik';
export const FormData = styled(Form)`
  display: block;
  border: 1px solid black;
  padding: 20px 200px 20px 30px;
  background-color: #c0c0c0;
`;

export const InputForm = styled(Field)`
  display: block;
  padding: 10px 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font: 0.6em 'typewriter', sans-serif;
  color: black;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #4169e1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font: 0.8em 'typewriter', sans-serif;
`;
export const Btn = styled.button`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: inline-block;
  padding: 1px 15px;
  color: black;
  border: 1px solid #0000ff;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 24px;

  &:hover,
  &:focus {
    background-color: #4682b4;
  }
`;
