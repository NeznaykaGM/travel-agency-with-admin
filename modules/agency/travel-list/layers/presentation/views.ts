import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  flex-grow: 1;
  grid-gap: 32px;
  overflow: hidden;
  padding: 50px 32px;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 375px));

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
