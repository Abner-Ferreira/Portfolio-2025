import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typewriter } from 'react-simple-typewriter'
import Social from '../../components/socialMedia/Social'
import {
  Container,
  StyledCursor,
  Titulo,
  TypewriterWrapper
} from './Home.styles'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Container id='home'>
        <Titulo>Abner Ferreira</Titulo>
        <TypewriterWrapper>
          <Typewriter
            words={[
              t('habilities'),
              t('habilities1'),
              t('habilities2'),
              t('habilities3'),
            ]}
            loop={true}
            cursor={true}
            cursorStyle={<StyledCursor>|</StyledCursor>}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </TypewriterWrapper>
        <Social />
      </Container>
    </>
  )
}
