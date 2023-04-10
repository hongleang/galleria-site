import React, { useContext, useEffect, useState } from 'react'
import Footer from "../commons/Footer"
import GalleryDetail from "../commons/GalleryDetail"
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/appContext";

const DetailPage = ({ slideShowStart }) => {
  const navigate = useNavigate();

  const { artworkDetails, nextArtWorkLink } = useContext(AppContext)
  const [progress, setProgress] = useState(0);

  useEffect(() => setProgress(0), [nextArtWorkLink]) // restart progress

  useEffect(() => {
    if (!artworkDetails) navigate("/error");
  }, [artworkDetails, navigate]);

  useEffect(() => {
    const timer = setInterval(() => slideShowStart && progress < 100 && setProgress(progress + 1), 500);
    return () => clearInterval(timer);
  }, [slideShowStart, progress, nextArtWorkLink]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress === 100 && nextArtWorkLink) {
        setProgress(0);
        navigate("/" + nextArtWorkLink)
      }
    }, 300);

    return () => clearTimeout(timer);

  }, [nextArtWorkLink, progress, navigate])

  return (
    <>
      <GalleryDetail artworkDetails={artworkDetails} />
      <Footer name={artworkDetails.name} artist={artworkDetails.artist.name} progress={progress} />
    </>
  )
}

export default DetailPage