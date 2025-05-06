import React from 'react'
import { Btn, Link } from './Button.styles'
import { useTranslation } from 'react-i18next'
import cvPt from '../../assets/cvs/Abner CV - pt.pdf'
import cvEn from '../../assets/cvs/Abner CV - en.pdf'

export default function Button() {

  const {t, i18n} = useTranslation()
  
  const currentLanguage = i18n.language;

  return (
    <>
      <Btn>
        <Link href={currentLanguage === "en" ? cvEn : cvPt} download>
          {t("download")}
        </Link>
      </Btn>
    </>
  )
}
