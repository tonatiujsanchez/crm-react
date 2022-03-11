import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente';
import Spinner from '../components/Spinner';


const Inicio = () => {

    const [ clientes, setClientes ] = useState([]);
    const [ cargando, setCargando ] = useState(false);

    const handleEliminar =  async( id, nombre ) => {
        const confirmar = confirm(`¿Deseas eliminar el cliente ${ nombre }?`)
        if( confirmar ){
            try {
                const url = `http://localhost:4000/clientes/${ id }`;
                const resp = await fetch(url,{
                    method: 'DELETE'
                })
                await resp.json();
                
                const nuevosClientes = clientes.filter( cliente => cliente.id !== id )
                setClientes( nuevosClientes )
            } catch (error) {
                
            }
        }
    }

    useEffect(async () => {
        setCargando(true);
        const getClientes = async () => {
            try {
                const url = 'http://localhost:4000/clientes';
                const resp = await fetch(url);
                const result = await resp.json();

                setClientes( result );
            } catch (error) {
                console.log('Hubo un error al intentar obtener los clientes', error);
            }
        
            setCargando(false);
    
        }
        getClientes();
    }, [])

    return (
        <div>
            <h1 className="font-black text-3xl text-indigo-600">Clientes</h1>
            <p className=" mt-1 text-md font-semibold">Administra tus clientes</p>

            {( cargando)
                ? <div className="grid place-items-center mt-52"> <Spinner /> </div> 
                : ( clientes.length > 0 )
                    ? <table className='max-w-full mt-5 table-auto shadow bg-white m-auto lg:w-10/12'>
                        <thead className='bg-indigo-700 text-white'>
                            <tr>
                                <th className='p-2'>Nombre</th>
                                <th className='p-2 hidden md:table-cell'>Contacto</th>
                                <th className='p-2'>Empresa</th>
                                <th className='p-2'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { clientes.map( cliente => (
                                <Cliente 
                                    key={ cliente.id } 
                                    cliente = { cliente }
                                    handleEliminar = { handleEliminar } />
                            )) 
                            }
                        </tbody>
                      </table>
                    : <div className="grid place-items-center mt-52">
                        <h2 className="text-2xl uppercase font-bold text-slate-700 text-center max-w-[300px] mx-auto">No hay clientes registrados</h2>
                      </div>
             
            }
        </div>
    )
}

export default Inicio