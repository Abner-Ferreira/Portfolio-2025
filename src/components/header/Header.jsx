import React, { useContext } from 'react'
import { ContainerMenu, IconTheme, LinkHeader, Logo } from './Header.styles'
import logoDark from '../../assets/img/logo-dark.svg'
import logoLight from '../../assets/img/logo-light.svg'
import { useTranslation } from 'react-i18next'
import { FaRegMoon } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { PortfolioContext } from '../../context/Context'
import Select from '../select/Select'

export default function Header() {
  const { t } = useTranslation()

  const { theme, changeTheme } = useContext(PortfolioContext)

  return (
    <>
      <ContainerMenu>
        <Logo src={theme === 'dark' ? logoDark : logoLight} />
        <LinkHeader href='#home'>{t('homeHeader')}</LinkHeader>
        <LinkHeader href='#sobre'>{t('aboutHeader')}</LinkHeader>
        <LinkHeader href='#portfolio'>{t('portfolioHeader')}</LinkHeader>
        <LinkHeader href='#contato'>{t('contactHeader')}</LinkHeader>
        <Select />
        {theme === 'dark' ? (
          <IconTheme onClick={() => changeTheme('light')}>
            <FiSun />
          </IconTheme>
        ) : (
          <IconTheme onClick={() => changeTheme('dark')}>
            <FaRegMoon />
          </IconTheme>
        )}
      </ContainerMenu>
    </>
  )
}
