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

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 46px;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 48px;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 54px;
  }
`

export const Linha = styled.div`
  width: 18%;
  height: 5px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.highlights};

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 14%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 10%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 6%;
  }
`
