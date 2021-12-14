import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const SectionsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  max-width: 1400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Photo = styled.img`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  margin-right: 40px;
  height: 100%;

  object-fit: cover;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.gray400};
`;

export const Description = styled.p`
  margin: 20px 0;

  color: ${({ theme }) => theme.colors.gray350};
`;

export const SubTitle = styled.p`
  font-size: 16px;
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.gray350};
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 20px;
  max-height: 20px;
`;

export const LPContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const Price = styled.p`
  font-size: 34px;
  font-weight: 800;
  line-height: 34px;

  color: ${({ theme }) => theme.colors.blue600};
`;
