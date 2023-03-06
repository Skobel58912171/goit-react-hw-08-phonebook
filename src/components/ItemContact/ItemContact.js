import { useState } from 'react';
import { Item, DataContact, Input, Text } from './ItemContact.styled';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { IconButton } from '@chakra-ui/button';
import { DeleteIcon, CheckIcon, EditIcon } from '@chakra-ui/icons';

const ItemContact = ({ id, name: nameValue, number: numberValue, onClick }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        return;
      case 'number':
        setNumber(evt.target.value);
        return;

      default:
        break;
    }
  };
  return (
    <>
      <Item>
        <DataContact>
          {isEdit ? (
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          ) : (
            <span>{name}</span>
          )}
          :
          {isEdit ? (
            <Input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
            />
          ) : (
            <Text>{number}</Text>
          )}
        </DataContact>
        <IconButton
          colorScheme="blue"
          aria-label="Delete"
          size="sm"
          icon={<DeleteIcon />}
          onClick={onClick}
        />

        <IconButton
          colorScheme="blue"
          aria-label="Delete"
          size="sm"
          icon={isEdit ? <CheckIcon /> : <EditIcon />}
          onClick={handleChangeMode}
        />
      </Item>
    </>
  );
};

export default ItemContact;
