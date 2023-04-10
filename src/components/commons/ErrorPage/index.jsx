import React from 'react'
import styled from "styled-components"
import { Heading1, Subhead1 } from "../SharedStyles/Typography"
import { Link } from "react-router-dom"

const ErrorStyles = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`


const ErrorPage = () => {
  return (
    <ErrorStyles>
      <Heading1 as="h2">Oops!</Heading1>
      <Subhead1>Sorry, an unexpected error has occurred.</Subhead1>
      <Link to="/">Go back to homepage</Link>
    </ErrorStyles>
  )
}

export default ErrorPage