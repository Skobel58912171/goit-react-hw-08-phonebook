import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Input } from '@chakra-ui/input';

import { Thumb } from './InputFilter.styled';

import { getFilter } from 'redux/contacts/selectors';

const InputFilter = () => {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);
  return (
    <Thumb>
      <Input
        variant="flushed"
        placeholder="Find contacts by name"
        _placeholder={{ opacity: 1, color: 'gray.500' }}
        type="text"
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
        value={value}
      />
    </Thumb>
  );
};

export default InputFilter;
