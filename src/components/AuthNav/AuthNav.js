import { Thumb, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Thumb>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Thumb>
  );
};
