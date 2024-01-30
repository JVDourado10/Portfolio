// import React from 'react'
import styled from 'styled-components'
import Github from '../assets/icon-github.svg?react'
import Linkedin from '../assets/icon-linkedin.svg?react'


const Bar = styled.header`
  background: linear-gradient(#111, #060606);
  color: #fff;
  padding: 8px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 12px 12px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 10000;
`

const Titulo = styled.h1`
  font-family: Poppins;
  font-weight: 400;
  & span {
    font-weight: bold;
  }
  &:hover {
    color: #cfcfcc;
  }
`

const MenuOptions = styled.nav`
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  display: flex;
  gap: 14px;
  & a {
    color: #F5F5F5;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 100%;
    position: relative;
    padding: 6px 0;
    

    &::after {
        content: '';
        height: 2px;
        width: 0%;
        background-color: #7d3e8a;
        position: absolute;
        bottom: 0px;
        transition: .3s;
      }

    &:hover {
      &::after {
        width: 100%;
      }
    }
    
  }
`

const MenuBar = () => {
  return (
    <Bar>
      <MenuOptions>
        <Github /><a href="https://github.com/JVDourado10" target='blank'>github</a>
        <Linkedin /><a href="https://www.linkedin.com/in/devjoaovictordourado/" target='blank'>linkedin</a>

      </MenuOptions>
      <a href="#"><Titulo>JOÃO VICTOR <span>DOURADO</span></Titulo></a>
      <MenuOptions>
        <a href="#projetos">projetos</a>
        <a href="#cursos">cursos</a>
        <a href="#contato">contato</a>
      </MenuOptions>
    </Bar>
  )
}

export default MenuBar