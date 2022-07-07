import React, { useState, useEffect } from 'react'
import './jogoDaVelha.css'

const JogoDaVelha = () => {
  
  const tabuleiroVazio = Array(9).fill("");

  const [tabuleiro, setTabuleiro] = useState(tabuleiroVazio);
  const [jogador, setJogador] = useState("X");
  const [resultado, setResultado] = useState(null);

  const eventoClique = (index) => {

    if(resultado){
      alert("JOGO FINALIZADO!");
      return null;
    }  

    if(tabuleiro[index] !== "") return null;

    setTabuleiro(tabuleiro.map((item, valIndex) => valIndex === index ? jogador : item))

    setJogador(jogador === "X" ? "O" : "X");
  } 

  const checarResultado = () => {
    const possibilidadesParaGanhar = [
      [tabuleiro[0], tabuleiro[1], tabuleiro[2]],
      [tabuleiro[3], tabuleiro[4], tabuleiro[5]],
      [tabuleiro[6], tabuleiro[7], tabuleiro[8]],

      [tabuleiro[0], tabuleiro[3], tabuleiro[6]],
      [tabuleiro[1], tabuleiro[4], tabuleiro[7]],
      [tabuleiro[2], tabuleiro[5], tabuleiro[8]],

      [tabuleiro[0], tabuleiro[4], tabuleiro[8]],
      [tabuleiro[2], tabuleiro[4], tabuleiro[6]]];

      possibilidadesParaGanhar.forEach(valor => {
        if (valor.every(valor => valor === "O")){ 
          setJogador("O");
          setResultado("O");
          document.querySelector(".estilo").style.cursor = "not-allowed";
        }

        if (valor.every(valor => valor === "X")){
          setJogador("X");
          setResultado("X");
          document.querySelector(".estilo").style.cursor = "not-allowed";
        }

        jogoEstaEmpatado();
      }); 
  }

  const jogoEstaEmpatado = () => {
    if(tabuleiro.every(item => item !== "")){
      setResultado("E");
    }
  }

  useEffect(checarResultado, [tabuleiro]);

  const recomecarJogo = () => {
    setJogador("X");
    setTabuleiro(tabuleiroVazio);
    setResultado(null);
  }

  console.log(resultado);
  return (
    <div className='jogo_container'>

      {resultado === null &&
        <div className={`jogador_da_vez ${jogador}`}>
          <h3>{jogador} JOGA!</h3>
        </div>
      }
      

      {(resultado !== "E" && resultado !== null) &&
        <div className={`jogador_da_vez ${jogador}`}>
          <h3>{jogador} VENCEU!</h3>
        </div>
      }

      {resultado === "E" &&
        <div className={`jogador_da_vez ${resultado}`}>
          <h3>JOGO EMPATADO!</h3>
        </div>
      }

      <div className={`jogo ${resultado ? "fim" : ""}`}>
        {tabuleiro.map((item, index) => (
          <div 
            key={index}
            type="button"
            className={`estilo ${item}`}
            onClick={() => eventoClique(index)} 
          >
            {item}
          </div>
        ))}
      </div>

      {resultado &&
        <div className={`reiniciar ${resultado}`}>
          <button onClick={recomecarJogo}>JOGAR NOVAMENTE!</button>
        </div>
      }
    </div>
  )
}

export default JogoDaVelha