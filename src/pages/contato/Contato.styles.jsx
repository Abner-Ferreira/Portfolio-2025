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

export const ContatosContainer = styled.div`
  width: 70%;
  height: 80%;
  margin: 40px 0;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 50px 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`
export const Contatos = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 50%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 50%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 40%;
  }
`
export const ContatoNome = styled.h2`
  font-weight: bold;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 80%;
  color: ${({ theme }) => theme.mainText};

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 65%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 60%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 60%;
  }
`

export const TextoContato = styled.a`
  color: ${({ theme }) => theme.secundaryText};
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.hover};
    cursor: pointer;
  }
`

export const FormularioContainer = styled.form`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.backgroundCard};
  border: 1.5px solid ${({ theme }) => theme.cardBorder};
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    width: 80%;
    /* gap: 10px; */
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    width: 70%;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    width: 50%;
    height: 90%;
  }
`

export const TextoFormulario = styled.p`
  color: ${({ theme }) => theme.secundaryText};
  font-size: 16px;
  text-align: justify;
  padding: 5px;
  width: 80%;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    font-size: 18px;
    padding: 10px;
    margin: 10px 0;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    font-size: 18px;
    padding: 10px;
    margin: 10px 0;
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    font-size: 18px;
    padding: 10px;
    margin: 15px 0;
  }
`

export const Input = styled.input`
  padding: 5px;
  width: 80%;
  height: 10%;
  border: none;
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.mainText};

  &::placeholder {
    color: ${({ theme }) => theme.mainText};
    padding: 10px;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.mainText};
  }

  &[type='submit'] {
    font-weight: bold;
    width: 84%;
    margin: 30px 0 10px 0;
    color: ${({ theme }) => theme.mainText};
  }

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    height: 20%;

    &::placeholder {
      padding: 2px;
    }
    &[type='submit'] {
      padding: 10px;
      margin: 10px 0;
    }
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    height: 30%;
    padding: 10px;

    &::placeholder {
      padding: 0px;
    }
    &[type='submit'] {
      padding: 10px;
      margin: 20px 0;
    }
  }

  /* 4K e acima */
  @media (min-width: 1920px) {
    height: 30%;
    padding: 10px;
    

    &::placeholder {
      padding: 0px;
    }
    &[type='submit'] {
      padding: 10px;
      width: 82%;
      margin: 15px 0;

      &:hover {
        background-color: ${({ theme }) => theme.hover};
        cursor: pointer;
      }
    }
  }
`

export const Mensagem = styled(Input).attrs({ as: 'textarea' })`
  height: 20%;
  resize: none;

  /* Tablets (retrato) */
  @media (500px <= width <= 850px) {
    height: 25%;
  }

  /* Tablets (paisagem) */
  @media (851px <= width <= 1080px) {
    height: 30%;
  }

   /* 4K e acima */
   @media (min-width: 1920px) {
    height: 40%;
  }
`
