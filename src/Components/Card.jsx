/* eslint-disable react/prop-types */
import React from 'react'
import styled from "styled-components"
import setaup from '../assets/arrow-up.svg'
import setadown from '../assets/arrow-down.svg'
import github from '../assets/github.svg'
import vercel from '../assets/vercel.svg'



const CardStyle = styled.div`
  border-radius: 50px;
  width: 350px;
  height: 500px;
  margin-bottom: 60px;
  background-image: url(${(props) => props.imageLink});
  position: relative;
  transition: .3s;
  background-position: 50%;
  background-size: 100%;
  opacity: 0.8;
  flex-shrink: 0;
  margin-left: 30px;
  transform: translateX(${(props) => props.posicao}px);

  &:hover {
    background-size: 105%;
    background-position: 50%;
    opacity: 1;
  }
`

const CardModal = styled.div`
  background-color: rgba(42, 42, 42, 0.8);
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 50px 50px;
  padding: 24px;

  & button {
    background: none;
    border: none;
    position: absolute;
    top: 5%;
    left: 46%;
    cursor: pointer;
  }

  & ul {
    list-style: none;
    margin-top: 6px;

    & li {
      background-color: #EBEBEB;
      display: inline-block;
      padding: 4px 8px;
      border-radius: 50px;
      font-family: Roboto;
      font-weight: bold;
      margin-right: 6px;
      font-size: 14px;
      color: #000;
    }
  }
`

const CardTitle = styled.h2`
  font-family: 'PLayfair Display';
  color: #f2f2f2;
  font-size: 24px;
`

const CardDescription = styled.p`
  font-family: 'PLayfair Display';
  font-weight: 500;
  color: #dbdbdb;
  font-size: 16px;
  padding: 20px 0;
`

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  & h2{
    grid-column: 1/3;
    color: #f2f2f2;
    font-family: Roboto;
    font-size: 14px;
    text-align: center;
    padding: 20px 0 8px 0;
  }
  & a {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;

    & p {
      font-weight: bold;
      font-family: 'IBM Plex Mono';
    }

    &:hover {
      color: #d7bddb;
    }
  }
`




// eslint-disable-next-line react/prop-types
const Card = ({img, habilidades, site, descricao, vercelLink, githubLink, posicao}) => {
  const [modal, setModal] = React.useState(false)


  return (
    <>
          <CardStyle posicao={posicao} imageLink={img}>
          <CardModal>
            <button onClick={() => setModal(!modal)}><img src={modal ? setadown : setaup}/></button>
            <CardTitle>{site}</CardTitle>
            {modal && <CardDescription>{descricao}</CardDescription>}
            <ul>
              {habilidades.map(habilidade => (
                <li key={habilidade}>{habilidade}</li>
              ))}
            </ul>
            {modal && <Links>
              <h2>Visite esse projeto em:</h2>
              <a href={githubLink} target='blank_'>
                <img src={github} />
                <p>Github</p>
              </a>
              <a href={vercelLink} target='blank_'>
                <img src={vercel} />
                <p>Vercel</p>
              </a>

            </Links>}
          </CardModal>
        </CardStyle>    
    </> 
  )
}

export default Card