import React, { useEffect, useState } from 'react'

import { BodyText, Heading1, Subhead1 } from "../SharedStyles/Typography"
import BtnLink from "../Buttons/BtnLink"
import BtnExpand from "../Buttons/BtnExpand"
import LightBox from "../LightBox/LightBox"
import { GridItem, GridsLayout } from "./GridLayout"
import { DisplayText, ImgContainer, TitleContainer } from "./GalleryDetailStyles"


const GalleryDetail = ({artworkDetails}) => {
  
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  useEffect(() => {
    if (lightBoxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightBoxOpen])


  if (!artworkDetails) return <></>

  const { name: titleName, artist, images: { hero: { large, small } }, year, description, source } = artworkDetails;

  return (<>
    <LightBox {...{ small, large, alt: titleName + "lightbox-img", lightBoxOpen, setLightBoxOpen }} />
    <GridsLayout>
      <GridItem>
        <ImgContainer>
          <picture>
            <source srcSet={large} media="(min-width: 576px)" />
            <img src={small} alt={titleName} />
          </picture>
          <BtnExpand onClick={() => setLightBoxOpen(true)}>
            <img src="/assets/shared/icon-view-image.svg" alt="view-img-btn" />
            View Image
          </BtnExpand>
        </ImgContainer>
      </GridItem>
      <GridItem>
        <TitleContainer>
          <div>
            <Heading1 as="h2" color="var(--clr-primary-800)">
              {titleName}
            </Heading1>
            <Subhead1 color="var(--clr-primary-600)">
              {artist.name}
            </Subhead1>
          </div>
        </TitleContainer>
      </GridItem>
      <GridItem>
        <ImgContainer>
          <img src={artist.image} alt={"artistImg_" + artist.name} />
        </ImgContainer>
      </GridItem>
      <GridItem>
        <DisplayText>
          {year}
        </DisplayText>
        <div>
          <BodyText as={"p"} color="var(--clr-primary-600)">
            {description}
          </BodyText>
          <BtnLink>
            <a href={source} target="_blank" rel="noreferrer">Go to source</a>
          </BtnLink>
        </div>
      </GridItem>
    </GridsLayout>
  </>
  )
}

export default GalleryDetail