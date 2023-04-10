import React from 'react'
import styled from "styled-components"

const BtnLinkStyles = styled.span`
  font-family: Libre Baskerville;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 2.142857074737549px;
  text-transform: uppercase;
  background: rgba(0,0,0, .75);
  border: none;
  padding: 1rem;
  color: var(--clr-white);
  transition: .3s;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--clr-primary-400);
    background: var(--clr-primary-600);
  }
`

const BtnExpand = ({ children, onClick }) => {
  return (
    <BtnLinkStyles onClick={onClick} as="button">{children}</BtnLinkStyles>
  )
}

export default BtnExpand