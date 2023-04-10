import React from 'react'
import styled from "styled-components"
import { Link2 } from "../SharedStyles/Typography"

const BtnLinkStyles = styled(Link2)`
  background: none;
  border: none;
  padding: 1rem 0;
  color: var(--clr-primary-600);
  transition: .3s;
  cursor: pointer;
  &:hover {
    color: var(--clr-primary-800);
  }
`

const BtnLink = ({children, onClick}) => {
  return (
    <BtnLinkStyles onClick={onClick} as="button">{children}</BtnLinkStyles>
  )
}

export default BtnLink