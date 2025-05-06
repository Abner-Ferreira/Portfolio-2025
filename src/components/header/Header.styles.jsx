import styled from 'styled-components'

export const ContainerMenu = styled.header`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`
export const LinkHeader = styled.a`
  text-decoration: none;
  font-size: 14px;
  padding: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mainText};
  &:hover {
    color: ${({ theme }) => theme.hover};
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 16px;
  }
`
export const IconTheme = styled.p`
  text-decoration: none;
  font-size: 14px;
  padding: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.mainText};
  &:hover {
    color: ${({ theme }) => theme.hover};
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 18px;
  }
`

export const Logo = styled.img`
  display: none;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    display: block;
    width: 10%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    display: block;
    width: 8%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    display: block;
    width: 6%;
  }
`
