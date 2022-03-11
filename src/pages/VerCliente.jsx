import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

import SkeletonVerCliente from './../components/SkeletonVerCliente'


const VerCliente = () => {

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
            }, 800);
        }
        getCliente();
    },[])
  return (
    <div>
        {( cargando )
        ? ( <SkeletonVerCliente /> )
        : ( ( Object.keys(cliente).length > 0 )
            ?<>
                <p className=" mt-10 text-md font-semibold">Información detallada del cliente</p>
                <h1 className="font-black text-3xl text-indigo-600">{ cliente.nombre }</h1>

                <div className="mt-8">
                    <p className="uppercase font-extrabold text-indigo-900 mb-4">Empresa: <span className="text-gray-700 font-semibold">{ cliente.empresa }</span></p>
                    <p className="uppercase font-extrabold text-indigo-900 mb-1">Contacto:</p>
                    <div className="sm:ml-7 mb-4">
                        <p className="font-semibold">Email: <span className="text-gray-700">{ cliente.email }</span></p>
                        { ( cliente.telefono )
                            &&<p className="font-semibold">Telefono: <span className="text-gray-700">{ cliente.telefono }</span></p>

                        }
                    </div>
                    { ( cliente.notas )
                        && <>
                            <p className="uppercase font-extrabold text-indigo-900 mb-1">Notas:</p>
                            <textarea className="sm:ml-7 w-full md:w-96 min-h-[200px] bg-white p-5 rounded-lg" disabled value={ cliente.notas }></textarea>
                        </>
                    }    
                </div>
            </>
            : <h2 className=" mt-32 text-2xl uppercase font-bold text-slate-700 text-center max-w-[300px] mx-auto md:ml-10">No se encontraron resultados</h2>
        )}
        
    </div>
  )
}

export default VerCliente