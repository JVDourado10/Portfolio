// import React from 'react'
import styled from "styled-components"
import perfil from '../assets/perfil.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import ReactIcon from '../assets/React-icon.svg'
import sass from '../assets/sass.svg'
import less from '../assets/less.svg'
import gulp from '../assets/gulp.svg'
import grunt from '../assets/grunt.svg'
import whats from '../assets/whats.svg'
import download from '../assets/download.svg'
import curveIn from '../assets/curve-in.svg'
import curveOut from '../assets/curve-out.svg'
import detailsm from '../assets/detail-sm.svg'
import curriculo from '../../curriculo.pdf'
import linesm from '../assets/line-sm.svg'
import linebg from '../assets/line-bg.svg'


const Titulo = styled.h1`
  font-family: 'IBM Plex Mono';
  text-align: center;
  word-wrap: break-word;
  max-width: 13ch;
  margin: 0 auto;
  line-height: 1.2;
  margin-top: 100px;
  position: relative;

  & span {
    color: #5B2B65;
  }
`

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;
`

const Infos = styled.div`
  margin-top: 20px;
`

const Subtitulo = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  margin-bottom: 2px;
  margin-top: 16px;
  position: relative;
  &::before {
    content: '';
    width: 16px;
    height: 1px;
    background-color: #5B2B65;
    position: absolute;
    bottom: 2px;
  }
`

const Descricao = styled.p`
  font-family: 'Playfair Display';
  line-height: 115%;
  font-size: 24px;
  margin-bottom: 2px;
  max-width: 34ch;
`

const Imagem = styled.div`
  position: relative;

  &:hover {
    & .curvain {
      scale: 1.1;
    }

    & .curvaout {
      scale: 1.15;
    }

    & .linhasm {
      top: 20%;
      right: -10%;
    }

    & .linhabg {
      top: -10%;
      right: -80%;
    }
  }
`

const Perfil = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  position: relative;
`

const Habilidades = styled.div`
  background: linear-gradient(#7d3e8a, #5B2B65);
  box-shadow: 2px 2px 2px rgba(0,0,0,0.25);
  display: flex;
  height: 100px;
  border-radius: 30px;
  max-width: 550px;
  margin: 0 auto;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding:  0 20px;
  margin-bottom: 20px;
  & div {
    position: relative;
    display: grid;

    & img {
      transition: .3s;
      height: 40px;
      &:hover {
        transform: scale(1.15);
      }
    }
    
    & p {
      position: absolute;
      font-family: Roboto;
      text-align: center;
      color: #e5c7eb;
      font-weight: bold;
      justify-self: center;
      bottom: -25px;
      opacity: 0;
      transition: .3s;
    }

    &:hover {
      & p {
        opacity: 1;
      }
    }
  }
`

const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 100px;

  & a{
      border-radius: 30px;
      padding: 20px;
      font-family: Poppins;
      font-size: 24px;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.25);
      display: flex;
      gap: 10px;
      font-weight: bold;
  }

  & .botao1{
    background: #f7ecfa; 
    border: 1px solid #5B2B65;
    color: #5B2B65;
    transition: .3s;


    &:hover {
      color: #3c0c46;
      border: 1px solid #3c0c46;
      scale: 1.01;

    }
  }

  & .botao2{
    background: linear-gradient(#7d3e8a, #5B2B65); 
    color: #f2e2f5;
    transition: .3s;


    &:hover {
      background: linear-gradient(#561d61, #631872);
      color: #f2e2f5;
      scale: 1.01;
    }
  }
`

const Linesm = styled.img`
  position: absolute;
  top: 15%;
  right: -20%;
  transition: .3s;
  z-index: -1;
`
const Linebg = styled.img`
  position: absolute;
  top: 0%;
  right: -70%;
  transition: .3s;
  z-index: -1;
`
const CurveIn = styled.img`
  top: 0;
  height: 353px;
  width: 266px;
  position: absolute;
  transition: .3s;
`
const CurveOut = styled.img`
  top: 0;
  height: 356px;
  width: 279px;
  position: absolute;
  transition: .3s;

`

const Hero = () => {
  return (
    <>
      <Titulo>DESENVOLVEDOR <span>FULL</span>STACK</Titulo>
      <Container>
        <Infos>
          <Subtitulo detailsm={detailsm}>Curso</Subtitulo>
          <Descricao>Análise e Desenvolvimento de Sistemas</Descricao>
          <Descricao><span><b>UFPR</b> - 1º semestre</span></Descricao>
          <Subtitulo detailsm={detailsm}>Sobre</Subtitulo>
          <Descricao><b>Desenvolvedor Full Stack</b> com experiência em <b>React</b>, <b>JavaScript</b> , <b>TypeScript</b>, <b>Styled Components</b>, <b>ferramentas de automação npm</b>, <b>SASS</b> e <b>Python</b>. Apaixonado pela programação e pela possibilidade de sempre criar algo diferente. Atualmente cursando <b>Análise e Desenvolvimento de Sistemas</b> e me especializando na área de <b>Desenvolvimento Full Stack</b> através do curso da EBAC.</Descricao>
        </Infos>
        <Perfil linesm={linesm} linebg={linebg}>
          <Imagem>
            <img className="perfil" src={perfil} alt="Perfil" />
            <Linesm className="linhasm" src={linesm} />
            <Linebg className="linhabg" src={linebg} />
            <CurveIn className="curvain" src={curveIn} />
            <CurveOut className="curvaout" src={curveOut} />
          </Imagem>
        </Perfil>
      </Container>
      <Habilidades>
        <div>
          <img src={html} />
          <p>HTML</p>
        </div>
        <div>
          <img src={css} />
          <p>CSS</p>

        </div>
        <div>
          <img src={js} />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={ReactIcon} />
          <p>React</p>

        </div>
        <div>
          <img src={sass} />
          <p>Sass</p>

        </div>
        <div>
          <img src={less} />
          <p>Less</p>

        </div>
        <div>
          <img src={gulp} />
          <p>Gulp</p>

        </div>
        <div>
          <img src={grunt} />
          <p>Grunt</p>

        </div>

      </Habilidades>
      <Botoes>
        <a className="botao1" href={curriculo} download target="blank_">
          <img src={download} />
          CURRÍCULO</a>
        <a className="botao2" href="https://wa.me/5574998061735" target="blank_">
          <img src={whats} />
          CONTATO</a>
      </Botoes>
    </>
  )
}

export default Hero