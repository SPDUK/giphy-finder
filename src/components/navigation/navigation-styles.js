import styled from 'styled-components';
import Button from '@atlaskit/button';

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  background: #fff;
  padding: 1rem;
  a {
    margin-right: 10px;
  }
  h3 {
    display: none;
  }
  @media (min-width: 768px) {
    h3 {
      display: block;
    }
  }
`;

export const StyledButton = styled(Button)`
  span {
    font-weight: 700;
  }
`;
