import styled from 'styled-components'

export const NavButton = styled.button`
  height: 25px;
  width: 25px;

  margin-left: 8px;
  margin-right: 8px;

  background-color: transparent;
  border-width: 0px;

  cursor: pointer;
  outline: none;

  color: ${props => (props.isLightThemeActive ? ' #0f0f0f' : ' #f9f9f9')};
  font-size: 23px;
`
export const MenuPopupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props =>
    props.isLightThemeActive ? ' #f9f9f9' : '#231f20'};

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  font-size: 23px;
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
  font-size: 23px;
  font-weight: 500;
  margin-left: 10px;

  color: ${props => (props.isLightThemeActive ? ' #0f0f0f' : ' #f9f9f9')};
`
