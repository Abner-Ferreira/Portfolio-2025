import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Titulo = styled.h1`
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.mainText};
`

export const Linha = styled.div`
  width: 18%;
  height: 5px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.highlights};
`