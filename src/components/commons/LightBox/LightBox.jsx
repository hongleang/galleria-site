import React from 'react'
import styled from "styled-components"
import Button from "../Buttons/Button"

const BackDrop = styled.div`
  position: fixed;
  opacity: ${props => props.visible ? 1 : 0};
  background: rgba(0, 0, 0, .75);
  width: 100vw;
  height: 100vh;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity .3s;
  z-index: ${props => props.visible ? 100 : -100};
  & img {
    opacity: ${props => props.visible ? 1 : 0};
    max-width: 90%;
    margin: 0 auto;
    display: block;
    transition: opacity .3s;
    transition-delay: .5s;
    z-index: ${props => props.visible ? 150 : -100};
    @media(min-width: 800px){
      max-width: 700px;
    }
  }
`

const CustomCloseButton = styled(Button)`
  color: white;
`

const LightBox = ({ large, small, alt, setLightBoxOpen, lightBoxOpen }) => {
  return (
    <BackDrop visible={lightBoxOpen}>
      <CustomCloseButton onClick={() => setLightBoxOpen(false)}>
        Close
      </CustomCloseButton>
      <picture>
        <source srcSet={large} media="(min-width: 576px)" />
        <img src={small} alt={alt} />
      </picture>
    </BackDrop>
  )
}

export default LightBox