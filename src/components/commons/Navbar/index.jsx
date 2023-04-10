import React from 'react'
import styled from "styled-components"
import Button from "../Buttons/Button"
import { Link, useLocation, useNavigate } from "react-router-dom"

const NavStyles = styled.nav`
  width: 100%;
  border-bottom: 2px solid var(--clr-primary-400);
  margin: auto;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  & div:first-child {
    flex-basis: 40%;
    & img {
      max-width: 100%;
    }
  }

  @media(max-width: 576px){
    padding: 1rem 0;
    & button {
    font-size: 9px;
  }
  }
`

const Navbar = ({ slideShowStart, toggleSlideShow }) => {
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location.pathname === "/");

  return (
    <NavStyles>
      <Container>
        <Link to="/">
          <img src="/public/assets/shared/logo.svg" alt="Logo" />
        </Link>
        <Button onClick={() => {
          if (location.pathname === "/") {
            navigate('/gallery/Starry%20Night')
          }
          toggleSlideShow()
        }}>
          {!slideShowStart ? "Start slideshow" : "Stop slideshow"}
        </Button>
      </Container>
    </NavStyles>
  )
}

export default Navbar