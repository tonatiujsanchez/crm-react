import { useNavigate } from "react-router-dom";


const Cliente = ({ cliente, handleEliminar }) => {

    const navigate = useNavigate();

    const { nombre, empresa, email, telefono, notas, id  } = cliente;


  return (
    <tr className="border-b hover:bg-gray-100">
        <td className="p-3 pl-10">{ nombre }</td>
        <td className="p-3 hidden md:table-cell">
            <div className="grid place-content-center">
                <p><span className="text-gray-800 uppercase font-bold text-sm">Email:</span> { email }</p>
                <p><span className="text-gray-800 uppercase font-bold text-sm">Telefon:</span> { telefono }</p>
            </div>
        </td>
        <td className="p-3 text-center">
            <p className="">{ empresa }</p>
        </td>
        <td className="p-3">
            <button
                onClick={ ()=> navigate(`/clientes/${id}`) } 
                type="button" 
                className=" bg-green-600 hover:bg-green-700 text-white block w-full p-2 mb-2 uppercase font-bold text-xs rounded-sm">
                    Ver
            </button>
            <button
                onClick={ ()=> navigate(`/clientes/editar/${ id }`) } 
                type="button" 
                className=" bg-blue-600 hover:bg-blue-700 text-white block w-full p-2 mb-2 uppercase font-bold text-xs rounded-sm">
                    Editar
            </button>
            <button 
                onClick={ ()=> handleEliminar( id, nombre ) }
                type="button" 
                className="bg-red-600 hover:bg-red-700 text-white block w-full p-2 uppercase font-bold text-xs rounded-sm">
                    Emilinar
            </button>
        </td>

    </tr>
  )
}

export default Cliente