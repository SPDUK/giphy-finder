import styled from 'styled-components';

export const StyledInfiniteScroll = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledScrollTop = styled.div`
  transition: 0.35s ease-out;
  z-index: 9999;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  span {
    font-size: 1.75em;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.75);
  }
  &:active {
    transform: translateY(-8px);
  }
`;
