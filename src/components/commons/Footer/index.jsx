import React, { useContext } from 'react'
import styled from "styled-components"
import { Heading3, Subhead2 } from "../SharedStyles/Typography"
import BtnNav from "../Buttons/BtnNav"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../../context/appContext"

const FooterStyles = styled.footer`
  /* position: fixed;
  bottom: 0;
  left:0;
  right:0; */
`

const FooterFlex = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: var(--clr-primary-400);

  &::before {
    position: absolute;
    content: "";
    width: ${props => props.progress}%;
    height: 2px;
    top: -1px;
    background: var(--clr-primary-800);
    transition: width 500ms linear;
  }
`

const Footer = ({ name, artist, progress }) => {
  const { nextArtWorkLink, prevArtWorkLink } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <FooterStyles>
      <ProgressBar progress={progress} />
      <FooterFlex>
        <div>
          <Heading3 as="h3" color="var(--clr-primary-800)" style={{ marginTop: 5, marginBottom: 5 }}>
            {name}
          </Heading3>
          <Subhead2 color="var(--clr-primary-800)" >
            {artist}
          </Subhead2>
        </div>
        <div>
          <BtnNav type={"prev"} disabled={prevArtWorkLink ? false : true} onClick={() => { prevArtWorkLink && navigate("/gallery/" + prevArtWorkLink) }} />
          <BtnNav type={"next"} disabled={nextArtWorkLink ? false : true} onClick={() => { nextArtWorkLink && navigate("/gallery/" + nextArtWorkLink) }} />
        </div>

      </FooterFlex>
    </FooterStyles>
  )
}

export default Footer