import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import {
  CircleSocial,
  Container,
  ContainerMidia,
  Github,
  Imagem,
  StatusWrapper,
  SwiperWrapper,
  TagStatus,
  Texto,
  Titulo,
  TituloWrapper,
  Website,
} from './Card.styles'

import { getProjects } from '../../utils/projects'

export default function Card() {

  const projects = getProjects()

  return (
    <SwiperWrapper>
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView='auto'
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Container>
              <Imagem src={project.img} alt={project.name} />
              <TituloWrapper>
              <StatusWrapper>
                {project.status.map((itemStatus, index) => (
                  <TagStatus status={itemStatus.name} title='Projeto Concluído' key={index}>
                    {itemStatus.title}
                  </TagStatus>
                ))}
              </StatusWrapper>
                <Titulo>{project.name}</Titulo>
              </TituloWrapper>
              <Texto>{project.description}</Texto>
              <ContainerMidia>
                <CircleSocial
                  href={project.github}
                  target='_blank'
                  title='Ir para o Github'
                >
                  <Github />
                </CircleSocial>
                <CircleSocial
                  href={project.liveProject}
                  target='_blank'
                  title='Ir para o site do projeto'
                >
                  <Website />
                </CircleSocial>
              </ContainerMidia>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  )
}
