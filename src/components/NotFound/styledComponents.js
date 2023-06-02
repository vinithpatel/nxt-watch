import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #0f0f0f '};
  min-height: 70vh;

  height: 91vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};

  font-size: 25px;
`
export const NoVidesPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};
  text-align: center;
  font-size: 16px;
`
