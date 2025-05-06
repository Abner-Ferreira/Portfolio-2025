import React from 'react'
import { Container, Linha, Titulo } from './Portfolio.styles'
import Card from '../../components/card/Card'

export default function Portfolio() {
  return (
    <>
      <Container id='portfolio'>
        <Titulo>Portfolio</Titulo>
        <Linha />
        <Card />
      </Container>
    </>
  )
}
