import React from 'react'
import styled from "styled-components"

export const ContainerStyles = styled.div`
  width: 100%;
  padding-left: 2.5rem; 
  padding-right: 2.5rem;
  margin: auto; 
  @media(min-width: 576px){
    max-width: 540px;
  }
  @media(min-width: 768px){
    max-width: 740px;
  }
  @media(min-width: 992px){
    max-width: 960px;
  }
  @media(min-width: 1200px){
    max-width: 1140px;
  }
  @media(min-width: 1400px){
    max-width: 1320px;
  }
`

const Container = ({ children }) => {
  return (
    <ContainerStyles>{children}</ContainerStyles>
  )
}

export default Container