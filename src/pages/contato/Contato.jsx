import React, { useContext, useRef } from 'react'
import {
  Container,
  ContatoNome,
  Contatos,
  ContatosContainer,
  FormularioContainer,
  Input,
  Linha,
  Mensagem,
  TextoContato,
  TextoFormulario,
  Titulo,
} from './Contato.styles'
import { GoMail } from 'react-icons/go'
import { FaWhatsapp } from 'react-icons/fa'
import Social from '../../components/socialMedia/Social'
import { useTranslation } from 'react-i18next'
import { PortfolioContext } from '../../context/Context'

export default function Contato() {
  const { t } = useTranslation()

  const { sendEmail } = useContext(PortfolioContext)

  const formRef = useRef()

  return (
    <>
      <Container id='contato'>
        <Titulo>{t('contactTitle')}</Titulo>
        <Linha />
        <ContatosContainer>
          <Contatos>
            <ContatoNome>
              <GoMail />
              {t('contactEmail')}
            </ContatoNome>
            <TextoContato href='mailto: abnerferr2015@gmail.com'>
              abnerferr2015@gmail.com
            </TextoContato>
          </Contatos>
          <Social />
          <Contatos>
            <ContatoNome>
              <FaWhatsapp />
              {t('contactPhone')}
            </ContatoNome>
            <TextoContato href='https://wa.me/5511994805611' target='_blank'>
              +55 11 99480-56211
            </TextoContato>
          </Contatos>
        </ContatosContainer>
        <FormularioContainer
          onSubmit={e => sendEmail(e, formRef)}
          ref={formRef}
        >
          <TextoFormulario>{t('contactFormText')}</TextoFormulario>
          <Input
            placeholder={t('contactFormEmail')}
            type='email'
            name='email'
            required
          />
          <Input
            placeholder={t('contactFormName')}
            type='text'
            name='name'
            autoCapitalize='on'
            required
          />
          <Input
            placeholder={t('contactFormEnterprise')}
            type='text'
            name='enterprise'
            autoCapitalize='on'
            required
          />
          <Mensagem
            placeholder={t('contactFormMenssage')}
            name='message'
            autoCapitalize='on'
            required
          />
          <Input type='submit' value={t('contactFormSubmit')} />
        </FormularioContainer>
      </Container>
    </>
  )
}
