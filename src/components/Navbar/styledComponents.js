import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 60px;
  width: 100vw;
  background-color: ${props =>
    props.isLightThemeActive ? '#ffffff' : ' #181818'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 10px 10px 10px;
  @media (min-width: 768px) {
    padding: 10px 30px 10px 30px;
  }
`
export const WebsiteLogo = styled.img`
  height: 25px;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`

export const MobileContainer = styled(MenuContainer)`
  @media (min-width: 768px) {
    display: none;
  }
`
export const TabletContainer = styled(MenuContainer)`
  @media (max-width: 767px) {
    display: none;
  }
`

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
export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 8px;
  margin-left: 8px;
`
export const LogoutButton = styled.button`
  border-width: 1px;

  border-color: ${props => (props.isLightThemeActive ? '#3b82f6' : '#f9f9f9')};

  width: 60px;
  height: 25px;

  font-weight: 400;
  color: ${props => (props.isLightThemeActive ? '#3b82f6' : '#f9f9f9')};
  background-color: transparent;
  margin-left: 8px;
  margin-right: 5px;

  cursor: pointer;
  outline: none;
`
