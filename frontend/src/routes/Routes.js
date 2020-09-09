import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import CriarImagem from "../pages/CriarImagem/CriarImagem";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/criar" exact component={CriarImagem} />
      </Switch>
    </BrowserRouter>
  );
}
