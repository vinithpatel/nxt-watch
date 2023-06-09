import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #0f0f0f '};
  min-height: 70vh;

  padding: 20px;

  height: 91vh;
  width: 100%;

  overflow-y: auto;
`
export const VideoItemTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;

  color: ${props => (props.isLightThemeActive ? '#000000' : '#ffffff')};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-width: 768px) {
  }
`

export const Published = styled(ViewCount)``

export const Dot = styled.div`
  height: 3px;
  width: 3px;

  background-color: ${props =>
    props.isLightThemeActive ? '#64748b' : ' #94a3b8'};
  border-radius: 50%;

  margin-right: 10px;
`

export const Button = styled.button`
  border-width: 0px;

  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isLightThemeActive ? '#64748b' : ' #94a3b8')};
  margin-right: 10px;

  color: ${props => (props.isActive ? '  #2563eb' : '')};

  display: flex;
  align-items: center;

  background-color: transparent;

  cursor: pointer;
  outline: none;
`

export const HarizentalRule = styled.hr`
  width: 100%;
  background-color: ${props =>
    props.isLightThemeActive ? '#64748b' : ' #94a3b8'};
  height: 1px;
  border: none;
`
export const ChannelName = styled(ViewCount)`
  color: ${props => (props.isLightThemeActive ? '#000000' : ' #ffffff')};
  margin-bottom: 5px;
`
export const Description = styled(ViewCount)`
  margin-top: 20px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};

  font-size: 25px;
`
export const FailurePara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightThemeActive ? ' #181818' : '#e2e8f0')};

  font-size: 16px;
`
