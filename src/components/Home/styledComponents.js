import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #0f0f0f '};
  min-height: 60vh;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const InputCard = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  padding: 20px 20px 0px 20px;

  @media (min-width: 576px) {
    width: 300px;
    padding: 0px;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 28px;

  background-color: ${props =>
    props.isLightThemeActive ? ' #ffffff' : ' #181818'};

  border-width: 1px;
  border-color: ${props =>
    props.isLightThemeActive ? ' #f1f5f9 ' : ' #f1f1f1'};

  outline: none;

  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
`

export const SearchButton = styled.button`
  width: 70px;
  height: 28px;

  cursor: pointer;
  outline: none;

  background-color: ${props =>
    props.isLightThemeActive ? ' #f1f1f1' : '#7e858e'};

  border-width: 1px;
  border-color: ${props =>
    props.isLightThemeActive ? ' #f1f5f9 ' : ' #64748b'};
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
export const Banner = styled.div`
  height: 200px;
  width: 100%;
  padding: 20px;

  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`
