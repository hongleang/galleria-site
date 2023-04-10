import styled from "styled-components"

export const Masonry = styled.div`
   max-width: 100%;
   padding: 3rem 0;
   display: grid;
   grid-gap: 40px;
   grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
   grid-auto-rows: 0px;
   grid-auto-flow: dense;
   width: 100%;
`

export const MasonryItem = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  cursor: pointer;
  transition: opacity .3s linear;

  &:hover {
    opacity: .55;
  }
  &:nth-child(1){
    grid-row: span 7;
  }
  &:nth-child(2){
    grid-row: span 10;
  }
  &:nth-child(3){
    grid-row: span 7;
  }
  &:nth-child(4){
    grid-row: span 7;
  }
  &:nth-child(5){
    grid-row: span 8;
  }
  &:nth-child(6){
    @media(min-width: 1350px){
      grid-column: 2/3;
    }    
    grid-row: span 7;
  }
  &:nth-child(7){
    grid-row: span 12;
  }
  &:nth-child(8){
    @media(min-width: 1350px){
      grid-column: 4/-1;
    }
    grid-row: span 6;
  }
  &:nth-child(9){
    @media(min-width: 1350px){
      grid-column: 1/2;
    }    
    grid-row: span 10;
  }
  &:nth-child(10){
    @media(min-width: 1350px){
      grid-column: 2/3;
    }
    grid-row: span 7;
  }
  &:nth-child(11){
    grid-row: span 10;
  }
  &:nth-child(12){
    @media(min-width: 1350px){
      grid-column: 1/2;
    }    
    grid-row: span 7;
  }
  &:nth-child(13){
    @media(min-width: 1350px){
      grid-column: 2/3;
    }
    grid-row: span 8;
  }
  &:nth-child(14){
    grid-row: span 13;
  }
  &:nth-child(15){
    grid-row: span 9;
  }
  
  & img {
    width: 100%;
    filter: brightness(85%);
    position: absolute;
    inset: 0;
    z-index: -10;
  }
`
export const CardText = styled.div`
  color: ${props => props.color ?? "black"};
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100%;
  justify-content: flex-end;
`