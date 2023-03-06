import styled from '@emotion/styled';
import { GiBookmarklet } from 'react-icons/gi';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  background: rgb(214, 158, 46);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 500;
`;

export const Svg = styled(GiBookmarklet)`
  margin-left: 5px;
  color: inherit;
  width: 25px;
  height: 25px;
`;
