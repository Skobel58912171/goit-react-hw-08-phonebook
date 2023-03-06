// import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  return (
    <>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </>
  );
};
