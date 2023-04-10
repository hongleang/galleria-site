import styled from "styled-components"
import { ImgContainer } from "./GalleryDetailStyles"

export const GridsLayout = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  @media(min-width: 575px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr, 1fr, auto);
  }
  @media(min-width:1200px){
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr) auto;
  }
`
export const GridItem = styled.div`
  /* Main image section */
  &:nth-child(1){
    @media(min-width:575px) {
      grid-area: 1 / 1 / 3 / 4;
    }
    @media(min-width: 1200px){
      grid-area: 1 / 1 / -1 / 3;
    }
  }
  /* Title section */
  &:nth-child(2){
    width: 80%;
    margin-top: -60px;
    z-index: 10;
    background: var(--clr-white);
    
    @media(min-width:575px) {
      width: 100%;
      margin-top: 0;
      padding: 0;
      padding-left: 0rem;
      grid-area: 1 / 3 / 2 / -1;
    }
    @media(min-width: 1200px){
      grid-area: 1 / 3 / 1 / 4;
      margin-left: -5rem;

    }
  }
  /* Portrait img */

  &:nth-child(3){
    ${ImgContainer} {
        width: 64px;
        height: 64px;
    }
    @media(min-width: 575px){
      grid-area: 2 / 4 / 3 / -1;
      ${ImgContainer} {
        margin-left: 1rem;
        width: inherit;
        height: inherit;
      }  
    }
    @media(min-width: 1200px){
      grid-area: 2 / 3 / -1 / 4;
      align-self: end;
    }
  }

  /* Description section */
  &:last-child {
    margin-top: -40px;
    position: relative;
    z-index: 10;
    padding-bottom: 2rem;
    @media(min-width:575px) {
      margin-top: 4rem;
      grid-column: 1/-1;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      & > * {
        grid-area: 1/1/-1/-1;
      }

      & div:last-child {
        padding: 3rem 7rem;
        @media(min-width: 1200px){
          padding: 4rem 8rem 0 0rem;
        }
      }
    }
    @media(min-width: 1200px){
      grid-area: 1 / 4 / -1 / -1;
    }
    
  }
`