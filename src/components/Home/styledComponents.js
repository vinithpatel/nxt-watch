import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props =>
    props.isLightThemeActive ? '#f9f9f9' : ' #0f0f0f '};

  height: 100%;
  padding: 20px;
`
export const InputCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 576px) {
    width: 300px;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 28px;
`

export const SearchButton = styled.button`
  width: 70px;
  height: 28px;
`
