import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &&:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

export const Form = () => {

  const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)

  SelectMonedas()

  return (
    <form>
      <SelectMonedas />

      <InputSubmit type='submit' value='Cotizar' />
    </form>
  )
}
