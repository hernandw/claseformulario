import BoxCard from './BoxCard';
import './Listado.css';
const Listado = ({ clientes }) => {
    
  return (
    <>
      <h1>Listado de Cliente</h1>
      
     {clientes.map((cli, index) => (
       <BoxCard key={index}  cliente={cli} />
     ))}
         
    </>
  );
}

export default Listado
