import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 590px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 28px;

  ${({ theme }) => theme.templates.ellipsis}
  color: ${({ theme }) => theme.colors.gray400};
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

export const LPWrapper = styled.div`
  display: flex;
  padding-top: 16px;
  align-items: center;
`;

export const Photo = styled.img`
  max-width: 375px;
  max-height: 375px;
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const LPContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const Price = styled.p`
  font-size: 34px;
  font-weight: 800;
  line-height: 34px;

  color: ${({ theme }) => theme.colors.blue600};
`;

export const PriceWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: flex-end;
`;
