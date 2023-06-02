import styled from 'styled-components'

export const PubishedTime = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
  }
`
