import React from "react";
import Cabecalho from "./componentes/cabecalho/Cabecalho";
import Rodape from "./componentes/rodape/Rodape";
import JogoDaVelha from "./componentes/Jogo/JogoDaVelha";

function App() {
  return (
    <>
    <div className="container">
      <Cabecalho/>
      <JogoDaVelha/>
      <Rodape/>
    </div>
    <div className="fundo">
      <img src="https://cdna.artstation.com/p/assets/images/images/024/538/828/original/pixel-jeff-clipc-s.gif?1582740521&dl=1" alt="" />
    </div>
    </>
  );
}

export default App;
