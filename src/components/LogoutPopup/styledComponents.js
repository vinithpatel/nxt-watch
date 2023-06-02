import styled from 'styled-components'

export const LogoutPopupContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isLightThemeActive ? '#ffffff' : '#181818'};

  padding: 20px;
  border-radius: 10px;
`

export const LogoutHeading = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;

  color: ${props => (props.isLightThemeActive ? '#1e293b' : ' #ffffff')};
`

export const Button = styled.button`
  width: 100px;
  height: 40px;

  font-size: 16px;
  font-family: 'Roboto';
  border-radius: 3px;
  font-weight: 500;

  cursor: pointer;
  outline: none;
`

export const CancelButton = styled(Button)`
  color: ${props => (props.isLightThemeActive ? '#616e7c' : ' #cccccc')};
  border-color: ${props => (props.isLightThemeActive ? '#616e7c' : ' #cccccc')};
  background-color: transparent;

  border-width: 1px;
  margin-right: 20px;
`

export const ConfirmButton = styled(Button)`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
`
