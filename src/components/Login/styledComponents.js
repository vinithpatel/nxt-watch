import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isLightActive ? ' #f9f9f9' : '#181818')};

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 30px;
  background-color: ${props => (props.isLightActive ? ' #ffffff' : '#0f0f0f')};

  @media (min-width: 768px) {
    width: 400px;
  }
`

export const WebsiteLogo = styled.img`
  height: 35px;
  margin-bottom: 40px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  width: 100%;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isLightActive ? '  #1e293b' : '#ffffff')};

  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 38px;

  padding: 10px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isLightActive ? '  #1e293b' : '#ffffff')};
  background-color: ${props => (props.isLightActive ? ' #ffffff' : '#0f0f0f')};
  border: 1px solid ${props => (props.isLightActive ? '#e2e8f0' : '#94a3b8')};
  border-radius: 3px;

  outline: none;
`

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`

export const CheckBoxLabel = styled(Label)`
  margin-left: 8px;
  font-weight: 400;
  font-size: 15px;
  color: ${props => (props.isLightActive ? '  #0f0f0f' : '#ffffff')};
`

export const CheckBoxCard = styled.div`
  width: 100%;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  background-color: #3b82f6;

  border-width: 0px;
  border-radius: 8px;

  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #ff0000;

  width: 100%;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;

  background-color: #3b82f6;

  border-width: 0px;
  border-radius: 8px;
`
