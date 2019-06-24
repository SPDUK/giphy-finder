import styled from 'styled-components';

export const CenteredImage = styled.img`
  margin: 50px auto 15px auto;
  display: flex;
  justify-content: center;
  max-width: 100%;
  @media (min-width: 500px) {
    margin: 15px auto;
  }
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding-bottom: 15px;
`;
