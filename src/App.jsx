import { useState } from "react"
//hook do react para mudanças de estado
import"./Style.scss"

export default function App() {
  //Variavel de estado
  //primeiroValor é a variavel de estado
  //setPrimeiroValor é a função atualizadora
const [primeiroValor, setPrimeiroValor] =useState();
const [segundoValor, setSegundoValor] = useState();
const [resultado, setResultado] = useState();

//arrow function () => {}
// funçao especial
const capturandoPrimeiroValor = (e) => {
  setPrimeiroValor(Number(e.target.value))
}

const capturandoSegundoValor = (e) => {
  setSegundoValor(Number(e.target.value))
}

//função somar
const soma = () => {
  setResultado(primeiroValor + segundoValor)
}
//função de subtração
const subtraçao = () => {
  setResultado(primeiroValor - segundoValor)
}
//função de divisão
const divisao = () => {
  setResultado(primeiroValor / segundoValor)
}
//função de multiplicaçao
const multiplicaçao = () => {
  setResultado(primeiroValor * segundoValor)
}

  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="insira um número"/>
      <input onChange={capturandoSegundoValor} type="number" placeholder="insira um número"/>
      <div>
        <button onClick={soma}>+</button>
        <button onClick={subtraçao}>-</button>
        <button onClick={divisao}>/</button>
        <button onClick={multiplicaçao}>x</button>
      </div>
      <h3>{resultado}</h3>
    </main>
  )
}
