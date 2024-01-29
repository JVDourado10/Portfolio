import styled from "styled-components"
import Github from '../assets/icon-github.svg?react'
import Linkedin from '../assets/icon-linkedin.svg?react'
import detailbg from '../assets/detail-bg.svg'


const Container = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1100px;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-bottom: 60px;
`

const Mensagem = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Playfair Display';
`

const Background = styled.section`
  background: linear-gradient(#3a3a3a, #222);
`

const SectionTitle = styled.h1`
  font-family: 'DM Sans';
  color: #f5f5f5;
  text-align: center;
  position: relative;
  font-size: 32px;
  padding-top: 40px;
  margin-bottom: 30px;
  &::before {
    content: '';
    width: 19px;
    height: 4px;
    background-image: url(${(props) => props.detailbg});
    position: absolute;
    bottom: 0;
  }
`

const Links = styled.nav`
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  display: flex;
  gap: 14px;
  margin-bottom: 10px;
  justify-content: center;
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
        background-color: #70ba11;
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

const ContatoInfos = styled.div`
  display: grid;
  gap: 10px;
  & p {
    font-family: 'IBM Plex Mono';
    color: #fff;
    font-size: 32px;
    text-align: center;
  }
`

const Contato = () => {
  return (
    <>
     <Background id="contato">
          <SectionTitle detailbg={detailbg}>CONTATO</SectionTitle>
        <Container>
          <Mensagem>Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋.</Mensagem>
          <ContatoInfos>
            <Links>
              <Github /><a href="https://github.com/JVDourado10" target='blank'>github</a>
              <Linkedin /><a href="https://www.linkedin.com/in/devjoaovictordourado/" target='blank'>linkedin</a>
            </Links>
            <p>jovneiva@gmail.com</p>
            <p>(74) 99806-1735</p>
          </ContatoInfos>
          
        </Container>
     </Background>
    
    </>
  )
}

export default Contato