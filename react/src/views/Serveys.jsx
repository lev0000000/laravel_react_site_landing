import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import PageComponent from "./components/PageComponent";

export default function Serveys() {
  return (
    <PageComponent title="Serveys">
      <Outlet />
    </PageComponent>
  );
}
