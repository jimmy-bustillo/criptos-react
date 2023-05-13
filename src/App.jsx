import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { Form } from "./components/Form"
import ImagenCripto from "../assets/img/imagen-criptos.png"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 88%;
  margin: 6.25rem auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 5rem;
  margin-bottom: 3.125rem;
  font-size: 2.125rem;

  &::after {
    content: "";
    width: 6.25rem;
    height: 0.375rem;
    background-color: #66a2fe;
    display: block;
    margin: 0.625rem auto 0 auto;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizarCripto = async () => {
        const { moneda, criptoMoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
        
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptoMoneda][moneda])
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagen Criptomonedas' />
      <div>
        <Heading>Cotiza criptomenedas al instante</Heading>
        <Form setMonedas={setMonedas} />
      </div>
    </Contenedor>
  )
}

export default App
