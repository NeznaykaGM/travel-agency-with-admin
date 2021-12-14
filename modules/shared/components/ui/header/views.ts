import styled from 'styled-components';

export const WHeader = styled.div<{ isScroll: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  width: 100%;
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
  transition: all 0.4s ease;
  justify-content: space-between;

  padding: ${({ isScroll }) => (isScroll ? '8px 50px' : '16px 50px')};
  background: ${({ theme, isScroll }) => (isScroll ? 'rgb(255, 255, 255, 0.65)' : theme.colors.white)};

  img {
    display: block;
    overflow: hidden;
    transition: all 0.4s ease;

    height: ${({ isScroll }) => (isScroll ? 28 : 34)}px;
    width: ${({ isScroll }) => (isScroll ? 40 : 50)}px;
  }

  @media (max-width: 768px) {
    padding: ${({ isScroll }) => (isScroll ? '8px 20px' : '16px 10px')};
  }
`;

export const LWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const LogoText = styled.p<{ isScroll: boolean }>`
  font-size: ${({ isScroll }) => (isScroll ? 22 : 28)}px;
  font-weight: 700;
  margin: 0 0 0 8px;
  transition: all 0.4s ease;

  color: ${({ theme }) => theme.colors.blue600};

  &:hover {
    color: ${({ theme }) => theme.colors.gray200};
  }
`;
