import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';

import { Label } from './InputFilter.styled';
import { Input } from './InputFilter.styled';
import { getFilter } from 'redux/contacts/selectors';

const InputFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  return (
    <>
      <Label>
        Find contacts by name
        <br />
        <Input
          type="text"
          onChange={e => {
            dispatch(setFilterValue(e.target.value));
          }}
          value={value}
        />
      </Label>
    </>
  );
};

export default InputFilter;
