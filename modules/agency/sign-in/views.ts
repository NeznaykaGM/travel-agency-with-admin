import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    height: unset;
    padding: 40px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContainerWrapper = styled.div`
  width: 400px;
  padding: 15px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 30%);
`;

export const LogoWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
