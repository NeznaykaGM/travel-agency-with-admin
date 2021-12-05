import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
  margin: 30px 0px 0px 0px;
  text-transform: uppercase;
  transition: opacity 0.2s ease-in-out 0s;

  color: ${({ theme }) => theme.colors.orange400};

  img {
    max-width: 40px;
    max-height: 10px;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 52px;
  height: 14px;
`;

export const Text = styled.span`
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 30px;
  margin-left: 10px;
`;
