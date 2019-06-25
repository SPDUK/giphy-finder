import styled from 'styled-components';
import Button from '@atlaskit/button';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-around;
  background: #fff;
  padding: 1rem 0;
  font-size: 0.7em;
  a {
    margin-right: 10px;
  }

  @media (min-width: 320px) {
    font-size: 0.8em;
  }
  @media (min-width: 340px) {
    font-size: 0.9em;
  }
  @media (min-width: 500px) {
    justify-content: flex-start;
    padding: 1rem;
    h3 {
      display: block;
    }
    aside {
      margin-left: auto;
    }
  }
`;

export const StyledIconLink = styled(Link)`
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;
export const StyledButton = styled(Button)`
  span {
    font-weight: 700;
  }
`;
