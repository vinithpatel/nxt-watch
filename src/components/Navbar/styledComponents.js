import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 50px;
  width: 100vw;
  background-color: ${props =>
    props.isLightThemeActive ? '#ffffff' : ' #0f0f0f'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 30px 10px 30px;
`
export const WebsiteLogo = styled.img`
  height: 35px;
  margin-bottom: 40px;
`
export const MobileContainer = styled.div``

export const NavButton = styled.button`
  background-color: transparent;
  border-width: 0px;

  cursor: pointer;
  outline: none;
`
