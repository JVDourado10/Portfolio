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




// import CurveIn from '../assets/curve-in.svg?react'
// import CurveOut from '../assets/curve-out.svg?react'

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
    color: #70ba11;
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
    background-image: url('./src/assets/detail-sm.svg');
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
  & span {
    color: #5b5b5b;
  }
  
`

const Perfil = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    &::after {
      scale: 1.1;
    }
    &::before {
      scale: 1.15;
    }
    & div {
      &::after {
        top: 20%;
        right: 20%;
      }
      &::before {
        top: -5%;
        right: -15%;
      }
    }
  }

  & img {
    position: relative;
    z-index: 1;
  } 
  &::after {
    content: '';
    height: 353px;
    width: 266px;
    background: url('./src/assets/curve-in.svg');
    position: absolute;
    transition: .3s;
  }
  &::before {
    content: '';
    height: 356px;
    width: 279px;
    background: url('./src/assets/curve-out.svg');
    position: absolute;
    transition: .3s;
  }
  & div {
    &::after {
      content: '';
      height: 278px;
      width: 347px;
      background: url('./src/assets/line-sm.svg');
      position: absolute;
      top: 15%;
      right: 15%;
      transition: .3s;
    }
    &::before {
      content: '';
      height: 457px;
      width: 541px;
      background: url('./src/assets/line-bg.svg') no-repeat;
      position: absolute;
      top: 0%;
      right: -10%;
      transition: .3s;
    }
  }
`

const Habilidades = styled.div`
  background: linear-gradient(#C9EC9C, #A6CD74);
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
      color: #254102;
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
      font-family: Roboto;
      font-size: 24px;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.25);
      display: flex;
      gap: 10px;
  }

  & .botao1{
    background: none; 
    border: 1px solid #70ba11;
    color: #70ba11;

    &:hover {
      color: #82c52a;
    border: 1px solid #82c52a;

    }
  }

  & .botao2{
    background: linear-gradient(#81ce1d,#5b990b); 
    color: #fff;


    &:hover {
      background: linear-gradient(#67aa0f,#4a7e07);
      color: #fff;
    }
  }
`


const Hero = () => {
  return (
    <>
      <Titulo>DESENVOLVEDOR <span>FRONT</span>END</Titulo>
      <Container>
        <Infos>
          <Subtitulo>Curso</Subtitulo>
          <Descricao>Análise e Desenvolvimento de Sistemas</Descricao>
          <Descricao><span>UNICESUMAR - 1º semestre</span></Descricao>
          <Subtitulo>Sobre</Subtitulo>
          <Descricao><b>Desenvolvedor Front-end</b> com experiência em <b>React</b>, <b>JavaScript</b> , <b>TypeScript</b>, <b>Styled Components</b>, <b>ferramentas de automação npm</b> e <b>SASS</b>. Apaixonado pela programação e pela possibilidade de sempre criar algo diferente. Atualmente cursando <b>Análise e Desenvolvimento de Sistemas</b> e me especializando na área de <b>Desenvolvimento Full Stack</b> através do curso da EBAC.</Descricao>
        </Infos>
        <Perfil>
          <div>
            <img className="perfil" src={perfil} alt="Perfil" />
          </div>
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
        <a className="botao1" href="./curriculo.pdf" download target="blank_">
          <img src={download} />
          Meu Currículo</a>
        <a className="botao2" href="https://wa.me/5574998061735" target="blank_">
          <img src={whats} />
          Entrar em contato</a>
      </Botoes>
    </>
  )
}

export default Hero