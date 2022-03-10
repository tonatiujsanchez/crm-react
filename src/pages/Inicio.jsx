import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente';

const Inicio = () => {

    const [ clientes, setClientes ] = useState([]);

    useEffect(async () => {
        const getClientes = async () => {
            try {
                const url = 'http://localhost:4000/clientes';
                const resp = await fetch(url);
                const result = await resp.json();

                setClientes( result );
                console.log( result );
            } catch (error) {
                console.log('Hubo un error al intentar obtener los clientes', error);
            }
        }
        getClientes();
    }, [])

    return (
        <div>
            <h1 className="font-black text-3xl text-indigo-600">Clientes</h1>
            <p className=" mt-1 text-md font-semibold">Administra tus clientes</p>

            {( clientes.length > 0)
                ? (<table className='max-w-full mt-5 table-auto shadow bg-white m-auto lg:w-10/12'>
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
                            <Cliente key={ cliente.id } cliente = { cliente } />
                        )) 
                        }
                    </tbody>
                </table>
                )
                : <p>No hay clientes registrados</p>
             
            }
        </div>
    )
}

export default Inicio