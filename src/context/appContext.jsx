import React, { createContext } from "react";
import data from "../data/data.json"
import { useParams } from "react-router-dom";

const defaultValue = {
  startSlideShow: false
}

export const AppContext = createContext(defaultValue);

export const AppContextProvider = ({ children }) => {
  let { artName } = useParams();
  const artworkIdx = data?.findIndex(d => d?.name?.toLowerCase() === artName?.toLowerCase());
  const nextArtWorkIdx = artworkIdx !== data.length ? artworkIdx + 1 : null;
  const prevArtWorkIdx = artworkIdx > 0 ? artworkIdx - 1 : null;
  const artworkDetails = data[artworkIdx];
  const nextArtWorkLink = nextArtWorkIdx ? data[nextArtWorkIdx]?.name : null;
  const prevArtWorkLink = data[prevArtWorkIdx]?.name;

 

  return <AppContext.Provider value={{ artworkDetails, nextArtWorkLink, prevArtWorkLink }}>
    {children}
  </AppContext.Provider>
}