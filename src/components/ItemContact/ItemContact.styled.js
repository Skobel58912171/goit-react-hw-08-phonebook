import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;

  border: 2px solid yellow;
  padding: 5px;
`;

export const DataContact = styled.p`
  display: flex;
  font-size: 18px;
  margin: 0 auto 0 0;
`;

export const Input = styled.input`
  display: block;
  padding: 10px 10px;
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

export const Text = styled.span`
  margin-right: 30px;
  margin-left: 10px;
`;
