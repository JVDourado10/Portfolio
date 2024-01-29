// import React from 'react'
import styled from "styled-components"
import Cardsm from './Cardsm'
import ebac from '../assets/ebac.svg'
import origamid from '../assets/origamid.svg'
import dio from '../assets/dio.png'
import detailbg from '../assets/detail-bg.svg'



const SectionTitle = styled.h1`
  font-family: 'DM Sans';
  color: #000;
  text-align: center;
  position: relative;
  font-size: 32px;
  padding-top: 40px;
  margin-bottom: 30px;
  padding-top: 100px;
  &::before {
    content: '';
    width: 19px;
    height: 4px;
    background-image: url(${(props) => props.$detailbg});
    position: absolute;
    bottom: 0;
  }
`

const CursosSection = styled.section`
  
`

const Container = styled.div`
  display: grid;
  margin: 80px auto;
  max-width: 1100px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
`

const Cursos = () => {
  return (
    <>
      <SectionTitle detailbg={detailbg} id="cursos">CURSOS</SectionTitle>
      <CursosSection>
        <Container>
          <Cardsm
            curso='Desenvolvedor Full Stack Python'
            horas=''
            instituicao='EBAC'
            imagem={ebac}
          />
          <Cardsm
            curso='HTML & CSS'
            horas='46h'
            instituicao='Origamid'
            imagem={origamid}
          />
          <Cardsm
            curso='JavaScript Completo ES6'
            horas='74h'
            instituicao='Origamid'
            imagem={origamid}
          />
          <Cardsm
            curso='UI Design Avançado'
            horas='30h'
            instituicao='Origamid'
            imagem={origamid}
          />
          <Cardsm
            curso='UI Design Para Iniciantes'
            horas='34h'
            instituicao='Origamid'
            imagem={origamid}
          />
          <Cardsm
            curso='TypeScrypt Para Angular'
            horas='3h'
            instituicao='DIO'
            imagem={dio}
          />

        </Container>
      </CursosSection>
    </>

  )
}

export default Cursos