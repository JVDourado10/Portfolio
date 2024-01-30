/* eslint-disable react/prop-types */
// import React from 'react'
import styled from "styled-components"
import curvein from '../assets/curve-2-in.svg'
import curveout from '../assets/curve-2-out.svg'


const CardsmStyle = styled.div`
  width: 300px;
  height: 180px;
  background: linear-gradient(#343434,#000);
  border-radius: 50px;
  padding: 30px;
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-rows: auto 30px;
  position: relative;

  & div {
    display: flex;
    gap: 6px;
    max-height: 45px;
    & img {
      width: 100%;
      max-width: 30px;
      object-fit: contain;
    }
  }
  & h2 {
    color: #fff;
    font-family: 'Playfair Display';
    font-size: 20px;
    max-width: 13ch;
  }
  & p{
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    align-self: center;
  }
  & span {
    color: #c7c7c7;
    font-family: Roboto;
    font-size: 20px;
  }

  &:hover {
    & .curvain {
      transform: scale(.92);
    }
    & .curvaout {
      transform: scale(.94);
    }
  }
`

const Curvein = styled.img`
  position: absolute;
  width: 404px;
  height: 249px;
  left: -50px;
  top: -40px;
  transform: scale(0.9);
  transition: .3s;
`

const Curveout = styled.img`
  position: absolute;
  width: 416px;
  height: 239px;
  left: -50px;
  top: -40px;
  transform: scale(0.9);
  transition: .3s;
`

const Cardsm = ({curso, horas, instituicao, imagem}) => {
  return (
    <CardsmStyle curvein={curvein} curveout={curveout}>
      <h2>{curso}</h2>
      <span>{horas}</span>
      <div>
        <img src={imagem} />
        <p>{instituicao}</p>
      </div>
      <Curvein className="curvain" src={curvein}/>
      <Curveout className="curvaout" src={curveout}/>
    </CardsmStyle>
  )
}

export default Cardsm