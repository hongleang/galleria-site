import React, { useState } from 'react'
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import DetailPage from "./components/pages/DetailPage";
import ErrorPage from "./components/commons/ErrorPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [slideShowStart, setSlideShowStart] = useState(false);
  const startSlideShow = () => setSlideShowStart(true);
  const stopSlideShow = () => setSlideShowStart(false);
  const toggleSlideShow = () => { setSlideShowStart(!slideShowStart) };

  return (
    <Routes>
      <Route path="/" element={<Layout slideShowStart={slideShowStart} toggleSlideShow={toggleSlideShow} />}>
        <Route index element={<Home />} />
        <Route path="/gallery/:artName" element={<DetailPage {...{ slideShowStart, startSlideShow, stopSlideShow }} />} />

        {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App