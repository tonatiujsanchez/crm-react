import Formulario from './../components/Formulario'

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-3xl text-indigo-600">Nuevo Cliente</h1>
      <p className=" mt-1 text-md font-semibold">Llena los siguientes campos para registros un nuevo cliente</p>
      <Formulario />
    </>
  )
}

export default NuevoCliente