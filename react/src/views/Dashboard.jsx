import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import PageComponent from "./components/PageComponent";

export default function Dashboard() {
  return (
    <PageComponent title="Dashboard">
      <Outlet />
    </PageComponent>
  );
}
