import React from 'react'
import { useNavigate } from "react-router-dom";

import data from "../../../data/data.json"
import { Heading2, Subhead2 } from "../SharedStyles/Typography"
import { CardText, Masonry, MasonryItem } from "./CardStyles"

const Card = () => {
  const navigate = useNavigate();

  if (!data) return <>No Data found!</>
  return (
    <section id="gallery">
      <Masonry>
        {data?.map(({ name, artist, images: { thumbnail } }) => (
          <MasonryItem key={"gallery_" + name} onClick={() => navigate(`/gallery/${name}`)}>
            <img src={thumbnail} alt="" />
            <CardText>
              <Heading2 style={{ marginBottom: 5 }} as="h2">{name}</Heading2>
              <Subhead2 color="var(--clr-primary-400)" style={{ margin: 0 }} as="h3">{artist.name}</Subhead2>
            </CardText>
          </MasonryItem>
        ))}
      </Masonry>
    </section>
  )
}

export default Card