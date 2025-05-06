import React, { useContext, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { PortfolioContext } from '../../context/Context'

export default function Select() {

  const countries = ['US', 'BR']

  const { changeLanguage, selected } = useContext(PortfolioContext)

  return (
    <>
      <ReactFlagsSelect
        selected={selected}
        onSelect={lang => changeLanguage(lang)}
        countries={countries}
        showSelectedLabel={false}
        showOptionLabel={false}
        className='container-flags'
        selectButtonClassName='btn-flags'
      />
    </>
  )
}
