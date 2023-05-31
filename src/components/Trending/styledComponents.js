import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #181818 '};
  min-height: 70vh;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
