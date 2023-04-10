import React from 'react'
import styled from "styled-components"
import { Link1 } from "../SharedStyles/Typography"

const BtnNavStyles = styled(Link1)`
background: none;
border: none;
padding: 1rem 1.5rem;
color: var(--clr-primary-600);
transition: .3s;
cursor: pointer;
&:hover {
  opacity: .50;
}
&:disabled {
  opacity: .50;
}
`

const BtnNav = ({ type, disabled = false, onClick }) => {
  const imgSrc = type === "next"
    ? "/assets/shared/icon-next-button.svg"
    : "/assets/shared/icon-back-button.svg"
  return (
    <BtnNavStyles onClick={onClick} as="button" disabled={disabled}>
      <img src={imgSrc} alt={type ?? "navBtn"} />
    </BtnNavStyles>
  )
}

export default BtnNav