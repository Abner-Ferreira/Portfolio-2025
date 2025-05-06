import React, { createContext, useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

export const PortfolioContext = createContext({})

export default function PortfolioContextProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function changeTheme(theme) {

    const newTheme = theme === 'dark' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  function sendEmail(e, formRef) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0vdjwq5',
        'template_qalyrel',
        formRef.current,
        'RJw1TcOxMP8Lk0XOs'
      )
      .then(() => {
        alert('Mensagem enviada com sucesso!')
        formRef.current.reset()
      })
      .catch(err => {
        alert('Erro ao enviar mensagem: ' + err.text)
      })
  }

  const { i18n } = useTranslation()
  const [selected, setSelected] = useState('US')

  function changeLanguage(lang) {
    console.log(lang)
    setSelected(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <PortfolioContext.Provider
        value={{ theme, changeTheme, sendEmail, changeLanguage, selected }}
      >
        {children}
      </PortfolioContext.Provider>
    </>
  )
}
