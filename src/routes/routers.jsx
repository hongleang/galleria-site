import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../components/pages/Home";
import DetailPage from "../components/pages/DetailPage";
import Layout from "../components/pages/Layout";
import ErrorPage from "../components/commons/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/:artName" element={<DetailPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;