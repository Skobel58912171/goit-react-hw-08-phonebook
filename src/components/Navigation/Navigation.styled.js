import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  text-decoration: none;

  &:hover,
  &:focus {
    border-bottom: 2px solid yellow;
  }
`;
