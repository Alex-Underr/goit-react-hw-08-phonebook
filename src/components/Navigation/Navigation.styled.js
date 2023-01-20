import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;
  font-size: 18px;
  color: #262727;
  font-size: 15px;

  &.active {
    color: #12a3a3;
    background: rgb(212, 201, 0);
    background: linear-gradient(
      0deg,
      rgba(212, 201, 0, 0.871568610354298) 0%,
      rgba(255, 255, 255, 1) 85%
    );
    border-radius: 5px;
  }
  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #148fbb;
    transition: 0.3s;
  }
`;
