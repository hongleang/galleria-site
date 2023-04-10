import React from 'react'
import styled from "styled-components"
import { Link1 } from "../SharedStyles/Typography"

const ButtonStyles = styled(Link1)`
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

const Button = ({ children, onClick }) => {
  return (
    <ButtonStyles onClick={onClick} as="button">{children}</ButtonStyles>
  )
}

export default Button