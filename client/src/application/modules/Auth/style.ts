import { media } from 'components/_themes/constants';
import { ColorsType } from 'components/_themes/light/types';
import styled from 'styled-components';

export const StyledAuthWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div<{ colors: ColorsType }>`
  min-width: 300px;
  min-height: 400px;
  box-sizing: border-box;
  background: ${({ colors }) => colors.lightGray};
  box-shadow: ${({ colors }) => `1px 2px 12px 0px ${colors.shadowBlack}`};
  border-radius: 15px;
  overflow: hidden;

  @media (${media.largePhone}) {
    min-width: 600px;
    min-height: 500px;
  }

  @media (${media.desktop}) {
    min-width: 800px;
    min-height: 600px;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;
export const StyledImageAuthForm = styled.img`
  object-fit: cover;
  display: none;

  @media (${media.largePhone}) {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (${media.desktop}) {
    width: 100%;
    height: 600px;
  }
`;

export const StyledAuthFormContainer = styled.div`
  margin-top: 200px;
`;
