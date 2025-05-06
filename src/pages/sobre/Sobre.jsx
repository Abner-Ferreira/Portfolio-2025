import React from 'react'
import abner from '../../assets/img/Abner.svg'
import {
  Container,
  ContainerTexto,
  ContainerWrapper,
  Destaque,
  Imagem,
  LinkSecundario,
  Texto,
  TextoSecundario,
  Titulo,
} from './Sobre.styles'
import { useTranslation } from 'react-i18next'
import Button from '../../components/button/Button'

export default function Sobre() {
  const { t } = useTranslation()

  return (
    <>
      <Container id='sobre'>
        <Imagem src={abner} alt='Foto' />

        <ContainerWrapper>
          <Titulo>{t('aboutTitle')}</Titulo>
          <Texto>{t('about')}</Texto>

          <ContainerTexto>
            <TextoSecundario>
              <Destaque>{t('nameAbout')}: </Destaque>
              Abner Rodrigues Ferreira
            </TextoSecundario>
            <TextoSecundario>
              <Destaque>{t('yearAbout')}: </Destaque>
              2003
            </TextoSecundario>
            <TextoSecundario>
              <Destaque>{t('locAbout')}: </Destaque>
              São Paulo, São Paulo
            </TextoSecundario>
            <LinkSecundario href='https://wa.me/5511994805611' target='_blank'>
              <Destaque>{t('telAbout')}: </Destaque>
              +55 11 99480-5611
            </LinkSecundario>
            <LinkSecundario href='mailto: abnerferr2015@gmail.com' target='_blank'>
              <Destaque>{t('emailAbout')}: </Destaque>
              abnerferr2015@gmail.com
            </LinkSecundario>
          </ContainerTexto>

          <Button />

        </ContainerWrapper>
      </Container>
    </>
  )
}
