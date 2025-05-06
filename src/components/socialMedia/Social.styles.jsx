import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import styled from 'styled-components'

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 50px 0;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 80%;
    margin: 80px 0;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 70%;
    margin: 100px 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 50%;
  }
`

export const CircleSocial = styled.a`
  height: 57px;
  width: 57px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.mainText};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 2px solid ${({ theme }) => theme.hover};
  }
`

export const Github = styled(FaGithub)`
  color: ${({ theme }) => theme.mainText};
  width: 50%;
  height: 100%;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
export const Linkedin = styled(FaLinkedinIn)`
  color: ${({ theme }) => theme.mainText};
  width: 50%;
  height: 100%;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
export const Instagram = styled(FaInstagram)`
  color: ${({ theme }) => theme.mainText};
  width: 50%;
  height: 100%;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`
