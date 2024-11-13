import { useState } from "react"
//hook do react para mudanças de estado
import"./Style.scss"

export default function App() {
  //Variavel de estado
  //primeiroValor é a variavel de estado
  //setPrimeiroValor é a função atualizadora
const [primeiroValor, setPrimeiroValor] =useState()
const [segundoValor, setSegundoValor] = useState();

//arrow function () => {}
// funçao especial
const capturandoPrimeiroValor = (e) => {
  setPrimeiroValor(Number(e.target.value))
}

const capturandoSegundoValor = (e) => {
  setSegundoValor(Number(e.target.value))
}
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="insira um número"/>
      <input onChange={capturandoSegundoValor} type="number" placeholder="insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}
