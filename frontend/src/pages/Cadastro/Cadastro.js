import React from "react";

import * as S from "./CadastroStyle";

const Home = () => {
  return (
    <S.Container>
      <S.Campo>
        <S.Label1>Nome</S.Label1>
        <S.Input1 />
      </S.Campo>
      <S.Campo>
        <S.Label1>NickName</S.Label1>
        <S.Input1 />
      </S.Campo>
      <S.Campo>
        <S.Label1>Email</S.Label1>
        <S.Input1 />
      </S.Campo>
      <S.Campo>
        <S.Label1>Senha</S.Label1>
        <S.Input1 />
      </S.Campo>
    </S.Container>
  );
};

export default Home;
