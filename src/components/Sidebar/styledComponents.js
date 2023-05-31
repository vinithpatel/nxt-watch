import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 220px;
  height: 91vh;

  padding: 20px 0px 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: 'Roboto';

  background-color: ${props =>
    props.isLightThemeActive ? '#ffffff' : '#181818'};

  @media (max-width: 767px) {
    display: none;
  }
`

export const NavItem = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isActive && props.isLightThemeActive ? ' #f1f5f9' : ''};
  background-color: ${props =>
    props.isActive && !props.isLightThemeActive ? ' #383838' : ''};
`

export const NavItemLogo = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => {
    if (props.isActive) {
      return '#ff0000'
    }

    return props.isLightThemeActive ? '#616e7c' : ' #cccccc'
  }};
`

export const NavItemName = styled.h1`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;

  color: ${props => (props.isLightThemeActive ? ' #0f0f0f' : ' #f9f9f9')};
`

export const Heading = styled.p`
  color: ${props => (props.isLightThemeActive ? ' #0f0f0f' : ' #f9f9f9')};
  font-size: 16px;
  font-weight: 600;
  margin-left: 0px;
`

export const ContactUsParagraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isLightThemeActive ? ' #0f0f0f' : ' #f9f9f9')};
`
