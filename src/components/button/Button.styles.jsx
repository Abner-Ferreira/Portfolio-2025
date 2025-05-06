import styled from 'styled-components'

export const Btn = styled.button`
  width: 40%;
  height: 40px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.highlights};
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    align-self: self-start;
  }
`

export const Link = styled.a`
  font-size: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.mainText};
`
