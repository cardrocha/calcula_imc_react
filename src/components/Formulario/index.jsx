import { useState } from "react"
import './formulario.css'


const Formulario = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaImc = () => {

    let imc = (peso / (altura * altura));
    const imcFixed = imc.toFixed(2);

    if (imc < 18.5 ) {
      return (
        <p>Abaixo do peso normal, seu imc é: <b>{imcFixed}</b></p>
      )
    } else if ( imc >= 19.5 && imc < 26.4 ) {
      return (
        <p>Peso normal, seu imc é: <b>{imcFixed}</b></p>
      )
    } else if (imc >= 26.4 &&  imc < 31) {
      return (
        <p>Excesso de peso, seu imc é: <b>{imcFixed}</b></p>
      )
    } else if (imc >= 31) {
      return (
        <p>Você está obeso, seu imc é: <b>{imcFixed}</b></p>
      )
    }
    console.log(imc)
  }

  return (
    <div className="container">
      <h1>Calcule seu IMC</h1>
      <input type="text" placeholder="Digite seu peso Ex: 100" onChange={evento => setPeso (evento.target.value)}/>
      <input type="text" placeholder="Digite seu altura EX: 1.55" onChange={evento => setAltura (evento.target.value)}/>
      {calculaImc()}
      <div className="tabela">
        <h2>Tabela IMC</h2>
        <p>Menor que 18.5 - Abaixo do peso norma</p>
        <p>De 18.5 a 24.99 - Peso normal</p>
        <p>De 25 a 29.99 - Excesso de peso</p>
        <p>Maior que 30 - Você está obeso</p>
      </div>
    </div>
    
  )
}


export default Formulario

