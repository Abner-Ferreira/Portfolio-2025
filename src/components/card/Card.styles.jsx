import styled from 'styled-components'
import { TfiWorld } from 'react-icons/tfi'
import { FaGithub } from 'react-icons/fa'

export const SwiperWrapper = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: auto;

  .swiper {
    padding-bottom: 60px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 82%;
  }
`

export const Container = styled.div`
  width: clamp(260px, 80%, 320px);
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundCard};
  border: 2px solid ${({ theme }) => theme.cardBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  transition: transform 0.3s;
`

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
  object-fit: cover;
  border: ${({ theme }) => theme.borderImgProject};
`

export const TituloWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

export const Titulo = styled.h1`
  font-size: 22px;
  color: ${({ theme }) => theme.mainText};
  font-weight: bold;
  text-align: center;
`
export const StatusWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const TagStatus = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  text-align: center;
  text-transform: uppercase;
  background-color: ${({ theme, status }) =>
    theme[status] ? theme[status].bg : theme.personal.bg};
  color: ${({ theme, status }) =>
    theme[status] ? theme[status].text : theme.personal.text};
  border-radius: 8px;
`

export const Texto = styled.p`
  color: ${({ theme }) => theme.secundaryText};
  font-size: 1rem;
  width: 100%;
  margin: 10px 0;
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const ContainerMidia = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`

export const CircleSocial = styled.a`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.mainText};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.3s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.hover};
  }
`

export const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.mainText};
  width: 24px;
  height: 24px;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`

export const Website = styled(TfiWorld)`
  color: ${({ theme }) => theme.mainText};
  width: 24px;
  height: 24px;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
