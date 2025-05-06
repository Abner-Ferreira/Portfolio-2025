import styled from 'styled-components'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export const Container = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    height: 95vh;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    height: 95vh;
  }
`

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.highlights};
  font-size: 44px;
  font-weight: bold;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 64px;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 68px;
  }
`

export const TypewriterWrapper = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.secundaryText};
  margin-top: 10px;
  text-align: center;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 32px;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 36px;
  }
`
export const StyledCursor = styled.span`
  font-size: 28px;
  color: ${({ theme }) => theme.secundaryText};
  animation: blink 0.7s infinite step-start;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 38px;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 42px;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`
