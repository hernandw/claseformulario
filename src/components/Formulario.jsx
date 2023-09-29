import { useState } from "react";

const Formulario = ({clientes, setClientes}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)
    const [mensaje, setMensaje] = useState('')
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
        setError(true);
        setMensaje('Todos los datos son obligatorios')
      return;
    } else {
        setError(false);
        alert('Formulario enviado');
        setName("");
        setEmail("");
        setPassword("");
        const cliente = { name, email, password };
        setClientes([...clientes, cliente]);
    }
  }
  return (
    <div className="w-50">
      <h1> Base de Datos de Clientes</h1>
      <form onSubmit={handleSubmit}>
              <div className="mb-2">
                  {error && <p className="text-danger">{mensaje}</p>}
          <label className="form-label" htmlFor="name">
            Nombre
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
                      id="email"
                      value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
                      id="password"
                      value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Cliente
        </button>
      </form>
    </div>
  );
};

export default Formulario;
