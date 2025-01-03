/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Card from "./Card"
import setaLeft from '../assets/arrow-left.svg'
import setaRight from '../assets/arrow-right.svg'
import bikcraftimg from '../assets/bikcraft.jpg'
import animaisFantasticosimg from '../assets/AnimaisFantasticos.jpg'
import efoodimg from '../assets/efood.jpg'
import disneyimg from '../assets/DisneyPlus.jpg'
import mulhollanddrimg from '../assets/mulhollanddr.jpg'
import liverpoolimg from '../assets/liverpool.jpg'
import worldimg from '../assets/worldgames.jpg'
import buffetimg from '../assets/buffet.jpg'
import detailbg from '../assets/detail-bg.svg'




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
    background-color: #7d3e8a;
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
  const cards = 8;
  
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
        <SectionTitle detailbg={detailbg}><span>PRO</span>JETOS</SectionTitle>
      <Container>
        <SlideLeft onClick={(posicao < 0) && (() => {
          setPosicao(posicao+380)
          setAumentou(false)
        })}><img src={setaLeft}/></SlideLeft>
        <Card
         img={bikcraftimg}
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Bikcraft'
         descricao='Meu primeiro site. Projeto de uma empresa de Bicicletas Elétricas fictícia, feito juntamente ao curso de HTML e CSS da Origamid.'
         vercelLink='https://jvdourado10.github.io/bikraft/'
         githubLink='https://github.com/JVDourado10/bikraft'
         posicao={posicao}
        >
        </Card>
        <Card
         img={animaisFantasticosimg}
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Animais Fantásticos'
         descricao='Projeto de um site informativo acerca de animais, feito juntamente ao curso de JavaScript da Origamid.'
         vercelLink='https://animais-fantasticos-origamid-syda.vercel.app/'
         githubLink='https://github.com/JVDourado10/animais-fantasticos-origamid'
         posicao={posicao}

        >
        </Card>
        <Card
         img={efoodimg}
         habilidades={['React', 'Redux', 'Styled Components']}
         site='Efood'
         descricao='Projeto final do curso de Front End da EBAC, efood simula um site de delivery de diversos restaurantes diferentes.'
         vercelLink='https://efood-six-nu.vercel.app/'
         githubLink='https://github.com/JVDourado10/efood'
         posicao={posicao}
        >
        </Card>
        <Card
         img={disneyimg}
         habilidades={['HTML', 'CSS', 'JavaScript']}
         site='Clone Disney+'
         descricao='Proposta de clonar o site da Disney+ para fins práticos e de fixação de conteúdo. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://clone-disneyplus-tawny.vercel.app/'
         githubLink='https://github.com/JVDourado10/clone_disneyplus'
         posicao={posicao}
        >
        </Card>
        <Card
         img={mulhollanddrimg}
         habilidades={['HTML', 'SASS', 'JavaScript']}
         site='Mulholland Dr'
         descricao='Site sobre o filme Mulholland Dr, feito com a biblioteca SASS. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://sorteador-grunt-gold.vercel.app/'
         githubLink='https://github.com/JVDourado10/sorteador_grunt'
         posicao={posicao}
        >
        </Card>
        
        <Card
         img={buffetimg}
         habilidades={['HTML', 'CSS', 'Bootstrap']}
         site='Buffet DyBraga'
         descricao='Site sobre um Buffet fictício, feito com a biblioteca Bootstrap. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://sorteador-grunt-gold.vercel.app/'
         githubLink='https://github.com/JVDourado10/sorteador_grunt'
         posicao={posicao}
        >
        </Card>

        <Card
         img={worldimg}
         habilidades={['HTML', 'CSS', 'Bootstrap']}
         site='World Games'
         descricao='Site de uma loja de jogos fictícia, feita com a biblioteca Bootstrap. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://world-games-mu.vercel.app/'
         githubLink='https://github.com/JVDourado10/world_games'
         posicao={posicao}
        >
        </Card>
        <Card
         img={liverpoolimg}
         habilidades={['HTML', 'CSS']}
         site='Liverpool Fan Website'
         descricao='Site sobre o time de futebol Liverpool, feito com HTML e CSS. Realizado juntamente ao curso de Desenvolvedor FullStack Python da EBAC'
         vercelLink='https://sorteador-grunt-gold.vercel.app/'
         githubLink='https://github.com/JVDourado10/sorteador_grunt'
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