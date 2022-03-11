import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


const Formulario = ({ cliente, cargando }) => {

    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El nombre es muy corto')
                    .max(40, 'El nombre es muy largo')
                    .required('El nombre del cliente es obligatorio') ,
        empresa: Yup.string()
                        .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
                        .email('Email no es válido')
                        .required('El email es obligatorio'),
        telefono: Yup.number()
                        .integer('El número no es válido')
                        .positive('El número no es válido')
                        .typeError('El número no es válido'),
        notas: ''
    })


    const handleSubmit = async ( values, resetForm )=>{
        try {
            let resp;
            if( cliente.id ){
                const url = `${ import.meta.env.VITE_API_URL }/${ cliente.id }`;
                resp = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify( values ),
                    headers: { 
                        'Content-Type': 'application/json'
                     }
                });
            }else{
                const url = import.meta.env.VITE_API_URL;
                resp = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify( values ),
                    headers: { 
                        'Content-Type': 'application/json'
                     }
                });
            }
            await resp.json();
            resetForm();
            navigate('/');
            
        } catch (error) {
            console.log('Hubo un error al intentar agregar un nuevo cliente.');
        }
    }


  return (
        <div className="mt-6 bg-white px-5 py-8 rounded-md shadow-md w-4/4 md:w-3/4 lg:w-[600px] mx-auto">
            <h1 className="text-gray-600 font-bold text-center uppercase text-lg">
                { cliente?.nombre ?' Editar Cliente ' : 'Agregar Nuevo Cliente' }
            </h1>
            <Formik
                initialValues={{
                    nombre: cliente.nombre ?? '',
                    empresa: cliente.empresa ?? '',
                    email: cliente.email ?? '',
                    telefono: cliente.telefono ?? '',
                    notas: cliente.notas ?? ''
                }} 
                enableReinitialize={true}
                onSubmit={ ( values, { resetForm } )=> {
                    handleSubmit(values, resetForm);
                }} 
                validationSchema = { nuevoClienteSchema } >

                {( { errors, isValid } ) => {

                   return (
                         <Form className='mt-3'>
                            <div className='mb-5'>
                                <label 
                                    htmlFor="nombre" 
                                    className="text-gray-600 text-sm font-bold uppercase" >
                                       Nombre: <span className='text-red-700'>*</span>
                                </label>
                                <Field 
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre del Cliente"
                                    className=" mt-2 block w-full p-2 bg-gray-50 rounded-md shadow-sm focus:outline-indigo-700 text-md"    
                                />
                                <ErrorMessage component="p" name="nombre" className='text-red-600 mt-1 px-2' />

                            </div>
                            <div className='mb-5'>
                                <label 
                                    htmlFor="empresa" 
                                    className="text-gray-600 text-sm font-bold uppercase">
                                        Empresa: <span className='text-red-700'>*</span>
                                </label>
                                <Field 
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    placeholder="Empresa del Cliente"
                                    className=" mt-2 block w-full p-2 bg-gray-50 rounded-md shadow-sm focus:outline-indigo-700 text-md"    
                                />
                                <ErrorMessage component="p" name="empresa" className='text-red-600 mt-1 px-2' />

                            </div>
                            <div className='mb-5'>
                                <label 
                                    htmlFor="email" 
                                    className="text-gray-600 text-sm font-bold uppercase" >
                                        Email: <span className='text-red-700'>*</span>
                                </label>
                                <Field 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email del Cliente"
                                    className=" mt-2 block w-full p-2 bg-gray-50 rounded-md shadow-sm focus:outline-indigo-700 text-md"    
                                />
                                <ErrorMessage component="p" name="email" className='text-red-600 mt-1 px-2' />
                            </div>
                            <div className='mb-5'>
                                <label 
                                    htmlFor="telefono" 
                                    className="text-gray-600 text-sm font-bold uppercase" >
                                        Telefono:
                                </label>
                                <Field 
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Telefono del Cliente"
                                    className=" mt-2 block w-full p-2 bg-gray-50 rounded-md shadow-sm focus:outline-indigo-700 text-md"    
                                />
                                <ErrorMessage component="p" name="telefono" className='text-red-600 mt-1 px-2' />

                            </div>
                            <div className='mb-5'>
                                <label 
                                    htmlFor="notas" 
                                    className="text-gray-600 text-sm font-bold uppercase" >
                                        Notas
                                </label>
                                <Field 
                                    as="textarea"
                                    type="text"
                                    id="notas"
                                    name="notas"
                                    placeholder="Notas del Cliente"
                                    className=" mt-2 block w-full p-2 bg-gray-50 rounded-md shadow-sm h-40 max-h-20 focus:outline-indigo-700"    
                                />
                            </div>

                            <input 
                                type="submit" 
                                value={ cliente?.nombre ?' Editar Cliente ' : 'Agregar Cliente'}
                                className="mt-5 w-full bg-indigo-600 p-3 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-indigo-700" 
                             />
                         </Form>

                   )}
                }
            </Formik>
         </div>
  )
}


Formulario.defaultProps = {
    cliente: { },
    cargando: false
}

export default Formulario