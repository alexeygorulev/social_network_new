import { media } from 'components/_themes/constants';
import { ColorsType } from 'components/_themes/light/types';
import styled from 'styled-components';

export const StyledAuthWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div<{ colors: ColorsType; mobileScreen: boolean }>`
  width: 300px;
  min-height: 400px;
  box-sizing: border-box;
  background: ${({ colors }) => colors.lightGray};
  box-shadow: ${({ colors }) => `1px 2px 12px 0px ${colors.shadowBlack}`};
  border-radius: 15px;
  overflow: hidden;
  padding: ${({ mobileScreen }) => (mobileScreen ? '15px' : '')};

  @media (${media.largePhone}) {
    min-width: 600px;
    min-height: 500px;
  }

  @media (${media.largeDesktop}) {
    min-width: 800px;
    min-height: 600px;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
`;
export const StyledImageAuthForm = styled.img`
  object-fit: cover;

  @media (${media.largePhone}) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const StyledAuthFormContainer = styled.div<{ registration?: boolean }>`
  margin-top: ${({ registration }) => (registration ? '10px' : '140px')};
  padding-right: 10px;
`;
