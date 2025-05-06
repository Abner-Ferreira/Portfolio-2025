import React from 'react'
import {
  CircleSocial,
  Github,
  Instagram,
  Linkedin,
  SocialMediaContainer,
} from './Social.styles'

export default function Social() {
  return (
    <>
      <SocialMediaContainer>
        <CircleSocial href='https://github.com/Abner-Ferreira' target='_blank'>
          <Github />
        </CircleSocial>
        <CircleSocial
          href='https://www.linkedin.com/in/abner-ferreira/'
          target='_blank'
        >
          <Linkedin />
        </CircleSocial>
        <CircleSocial
          href='https://www.instagram.com/abnerferr_/'
          target='_blank'
        >
          <Instagram />
        </CircleSocial>
      </SocialMediaContainer>
    </>
  )
}
