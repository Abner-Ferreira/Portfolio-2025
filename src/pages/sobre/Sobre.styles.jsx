import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    height: 95vh;
    flex-direction: row;
    justify-content: space-evenly;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const Imagem = styled.img`
  margin-top: -150px;
  display: block;
  width: 280px;
  height: auto;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 40%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    margin-top: 0px;
    width: 30%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 25%;
    margin-top: 0;
  }
`

export const ContainerWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 80vw;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px 0;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 50%;
    align-items: flex-start;
    justify-content: flex-start;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 50%;
    height: 55%;
  }
`

export const Titulo = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.mainText};
  margin: 40px 0;
  text-transform: uppercase;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 28px;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 100%;
    margin: 0px 0 40px 0;
    font-size: 32px;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 100%;
    font-size: 40px;
    margin: 0 0 60px 0;
  }
`
export const Texto = styled.p`
  color: ${({ theme }) => theme.secundaryText};
  width: 70%;
  text-align: justify;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 18px;
    width: 80%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 18px;
    width: 100%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 18px;
    width: 80%;
    align-self: start;
  }
`
export const ContainerTexto = styled.div`
  margin-top: 40px;
  height: 20%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    height: 30%;
    width: 80%;
    margin: 20px 0 30px 0;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    margin: 30px 0 20px 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 100%;
    height: 40%;
    margin: 40px 0 60px 0;
  }
`

export const Destaque = styled.span`
  color: ${({ theme }) => theme.mainText};

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 20px;
    margin: 5px 10px 0 0;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 20px;
    margin: 5px 10px 0 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 20px;
    margin: 5px 15px 0 0;
  }
`

const textoSecundarioStyles = css`
  color: ${({ theme }) => theme.secundaryText};
  text-align: left;
  width: 100%;

  @media (500px <= width <= 850px) {
    font-size: 18px;
    margin: 5px 0;
  }

  @media (851px <= width <= 1080px) {
    font-size: 18px;
    margin: 5px 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 18px;
    margin: 5px 0;
  }
`

export const TextoSecundario = styled.p`
  ${textoSecundarioStyles}
`

export const LinkSecundario = styled.a`
  ${textoSecundarioStyles}
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
