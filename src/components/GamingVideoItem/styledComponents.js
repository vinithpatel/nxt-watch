import styled from 'styled-components'

export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 5px;

  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 17px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`
