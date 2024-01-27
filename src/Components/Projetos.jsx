/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Card from "./Card"
import setaLeft from '../assets/arrow-left.svg'
import setaRight from '../assets/arrow-right.svg'



import styled from "styled-components"

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
  padding-top: 100px;
  &::before {
    content: '';
    width: 19px;
    height: 4px;
    background-image: url('./src/assets/detail-bg.svg');
    position: absolute;
    bottom: 0;
  }
`

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;

`

const SlideLeft = styled.button`
  position: absolute;
    z-index: 1;
    background-color: rgba(90,90,90,.7);
    border-radius: 15px;
    padding: 8px;
    border: none;
    top: 200px;
    left: 20px;
    cursor: pointer;
`

const SlideRight = styled.button`
  position: absolute;
    z-index: 1;
    background-color: rgba(90,90,90,.7);
    border-radius: 15px;
    padding: 8px;
    border: none;
    top: 200px;
    right: 20px;
    cursor: pointer;
`

const Projetos = () => {
  const {innerWidth: width} = window
  const [posicao, setPosicao] = React.useState(0)
  const [aumentou, setAumentou] = React.useState(true)

  const [cardPosicao, setCardPosicao] = React.useState(1)
  const cards = 7;
  
  React.useEffect(() => {
    if(aumentou) {
      setCardPosicao(cardPosicao+1)
    } else {
      setCardPosicao(cardPosicao-1)
    }
    console.log(cardPosicao)
  }, [posicao])

  React.useEffect(() => {
    const cardsNaTela = Math.floor(width/380)
    setCardPosicao(cardsNaTela + 1)
    // console.log(cardPosicao)
  },[])

  return (
    <Background id='projetos'>
        <SectionTitle><span>PRO</span>JETOS</SectionTitle>
      <Container>
        <SlideLeft onClick={(posicao < 0) && (() => {
          setPosicao(posicao+380)
          setAumentou(false)
        })}><img src={setaLeft}/></SlideLeft>
        <Card
         img='./src/assets/Bikcraft.jpg' 
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Bikcraft'
         descricao='Meu primeiro site. Projeto de uma empresa de Bicicletas Elétricas fictícia, feito juntamente ao curso de HTML e CSS da Origamid.'
         vercelLink='https://jvdourado10.github.io/bikraft/'
         githubLink='https://github.com/JVDourado10/bikraft'
         posicao={posicao}
        >
        </Card>
        <Card
         img='./src/assets/AnimaisFantasticos.jpg'
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Animais Fantásticos'
         descricao='Projeto de um site informativo acerca de animais, feito juntamente ao curso de JavaScript da Origamid.'
         vercelLink='https://animais-fantasticos-origamid-syda.vercel.app/'
         githubLink='https://github.com/JVDourado10/animais-fantasticos-origamid'
         posicao={posicao}

        >
        </Card>
        <Card
         img='./src/assets/Pokedex.jpg'
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Pokedex'
         descricao='Projeto de uma Pokedex, com informações sobre os todos os pokemons fornecidos pela API. Realizado no Bootcamp FullStack Java da Santander Coders.'
         vercelLink='https://js-developer-pokedex-ivory.vercel.app/'
         githubLink='https://github.com/JVDourado10/js-developer-pokedex'
         posicao={posicao}

        >
        </Card>
        <Card
         img='./src/assets/DisneyPlus.jpg'
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Clone Disney+'
         descricao='Proposta de clonar o site da Disney+ para fins práticos e de fixação de conteúdo. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://clone-disneyplus-tawny.vercel.app/'
         githubLink='https://github.com/JVDourado10/clone_disneyplus'
         posicao={posicao}
        >
        </Card>
        <Card
         img='./src/assets/sorteador.jpg'
         habilidades={['HTML', 'Less', 'JavaScript', 'Grunt']}
         site='Sorteador'
         descricao='Site com a função de sortear um número no intervalo definido pelo usuário, nesse projeto foi possivel consolidar o conhecimento em ferramentas como o Less e o Grunt. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://sorteador-grunt-gold.vercel.app/'
         githubLink='https://github.com/JVDourado10/sorteador_grunt'
         posicao={posicao}
        >
        </Card>
        <Card
         img='./src/assets/todovue.jpg'
         habilidades={['HTML', 'CSS', 'Vue.js']}
         site='ToDo'
         descricao='Projeto para criar um site que organize minha lista de tarefas, onde posso adicionar tarefas, marcar as completadas e até filtra-las. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://todo-vue-lyart.vercel.app/'
         githubLink='https://github.com/JVDourado10/todo-vue'
         posicao={posicao}
        >
        </Card>
        <Card
         img='./src/assets/worldgames.jpg'
         habilidades={['HTML', 'CSS', 'Bootstrap']}
         site='World Games'
         descricao='Site de uma loja de jogos fictícia, feita com a biblioteca Bootstrap. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://world-games-mu.vercel.app/'
         githubLink='https://github.com/JVDourado10/world_games'
         posicao={posicao}
        >
        </Card>
        <SlideRight onClick={(cardPosicao <= cards) && (() => {
          setPosicao(posicao-380)
          setAumentou(true)
        })}><img src={setaRight}/></SlideRight>
      </Container>
    </Background>
  )
}

export default Projetos