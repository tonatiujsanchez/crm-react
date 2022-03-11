import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

import Formulario from './../components/Formulario'
import Spinner from "../components/Spinner";



const EditarCliente = () => {

  const { id } = useParams();
  const [ cliente, setCliente ] = useState({});
  const [ cargando, setCargando ] = useState(false);

  useEffect(() => {
    setCargando(true)
    const getCliente = async() =>{
        try {
            const url = `https://my-json-server.typicode.com/tonatiujsanchez/crm-react/clientes/${ id }`;
            const resp = await fetch( url );
            const result = await resp.json();

            setCliente( result )
        } catch (error) {
            console.log('Hubo un error al tratar de leer el cliente.', error);
        }
        setTimeout(() => {
            setCargando(false);
        }, 500);
    }
    getCliente();
  },[])

  return (
    <>
      <h1 className="font-black text-3xl text-indigo-600">Editar Cliente</h1>
      <p className=" mt-1 text-md font-semibold">Utiliza este formulario para editar un cliente</p>

      {
        ( cargando )
        ? <div className="grid place-items-center mt-52"> <Spinner /> </div> 
        : ( cliente?.nombre ) 
          ? <Formulario cliente = { cliente } cargando = { cargando } /> 
          :<div className="grid place-items-center mt-52">
              <h2 className="text-2xl uppercase font-bold text-slate-700 text-center max-w-[300px] mx-auto">No se encontraron resultados</h2>
           </div>
      }
    </>
  )
}

export default EditarCliente



