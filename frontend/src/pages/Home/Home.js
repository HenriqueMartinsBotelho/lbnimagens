import React from "react";
import { Link } from "react-router-dom";
import * as S from "./HomeStyle";
import "./styleHome.css";

const Home = () => {
  return (
    <>
      <S.Main>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/criar">Clique para Criar Imagem</Link>
      </S.Main>
    </>
  );
};

export default Home;
