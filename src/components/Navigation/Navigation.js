import { useAuth } from 'hooks';
import { MdOutlineWavingHand } from 'react-icons/md';
import { Nav, Text, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <Text>
          Welcome, {user.name} <MdOutlineWavingHand style={{ marginLeft: 5 }} />
        </Text>
      )}
      <Nav>
        <StyledLink to="/">Home</StyledLink>

        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Nav>
    </>
  );
};
