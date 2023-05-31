import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #0f0f0f '};
  min-height: 70vh;

  height: 91vh;
  width: 100%;

  overflow-y: auto;
`
export const Banner = styled.div`
  width: 100%;
  height: 80px;
  @media (min-width: 768px) {
    height: 100px;
  }
  background-color: ${props =>
    props.isLightThemeActive ? '  #f4f4f4' : ' #231f20'};

  padding-left: 30px;
  display: flex;
  align-items: center;
`
export const BannerLogo = styled.div`
  font-size: 20px;
  color: #ff0000;

  background-color: #d7dfe9;
  height: 50px;
  width: 50px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  margin-left: 10px;

  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};

  font-size: 25px;
`
export const NoVidesPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};

  font-size: 16px;
`
