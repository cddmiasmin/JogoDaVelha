import React from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Rodape from "./componentes/rodape/Rodape";
import JogoDaVelha from "./componentes/Jogo/JogoDaVelha";

function App() {
  return (
    <div className="container">
      <Cabecalho/>
      <JogoDaVelha/>
      <Rodape/>
    </div>
  );
}

export default App;
