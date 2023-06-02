import styled from 'styled-components'

export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;

  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`

export const ViewCount = styled(ChannelName)``

export const Published = styled(ChannelName)``

export const Dot = styled.div`
  height: 3px;
  width: 3px;

  background-color: ${props =>
    props.isLightThemeActive ? '#64748b' : ' #94a3b8'};
  border-radius: 50%;

  margin-right: 10px;
`
