import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 0;
  text-decoration: none;

  &:hover,
  &:focus {
    border-bottom: 2px solid yellow;
  }
`;
