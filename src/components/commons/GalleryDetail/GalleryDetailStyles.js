import styled from "styled-components"
import { Heading1 } from "../SharedStyles/Typography"

export const ImgContainer = styled.div`
  position: relative;
  button {
    position: relative;
    top: -275px;
    @media(min-width: 575px) {
      top: -60px;
      left: 10px;
    }
  }
  & img {
    max-width: 100%;
  }
`

export const TitleContainer = styled.div`
  // Title and subtitle
  & div:first-child {
    padding: 2rem;
    ${Heading1} {
      font-size: 24px;
      line-height: 30px;
      @media(min-width:575px) {
        font-size: 56px;
        line-height: 64px;
      }
    }
  }
`

export const DisplayText = styled.div`
  font-size: 100px;
  font-weight: 700;
  line-height: 100px;
  letter-spacing: 0px;
  text-align: right;
  color: #F3F3F3;
  @media(min-width:575px) {
    text-align: inherit;
    font-size: 200px;
  }
`
