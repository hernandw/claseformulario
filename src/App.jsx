import { useState } from "react"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Buscador from "./components/Buscador"


const App = () => {
  const [clientes, setClientes] = useState([])
  return (
    <div className="container">
      <Buscador />
      <Formulario clientes={clientes} setClientes={setClientes} />
      <Listado clientes={clientes} />
    </div>
  )
}

export default App
