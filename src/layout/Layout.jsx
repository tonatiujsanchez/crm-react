import { Outlet, NavLink, useLocation } from "react-router-dom"


const Layout = () => {

    const { pathname:urlActual } = useLocation();

  return (
    <div className="md:flex md:min-h-screen">
        <div className="md:w-1/5 bg-gradient-to-r from-indigo-600 to-indigo-700 relative">
            <div className="bg-indigo-800 px-5 py-5 md:sticky top-0">
                <h2 className="font-black text-center text-white text-2xl">CRM CLIENTES</h2>
            </div>
            <nav className="px-10 py-10 md:sticky top-20">
                    <NavLink 
                        to="/clientes" 
                        className={`${ urlActual == '/clientes' ? 'text-white' : 'text-indigo-300' } block text-2xl my-4 hover:text-white font-bold`}>
                            Clientes
                    </NavLink>
                    <NavLink 
                        to="/clientes/nuevo" 
                        className={` ${ urlActual == '/clientes/nuevo' ? 'text-white' : 'text-indigo-300' } block text-2xl my-4 hover:text-white font-bold`}>
                            Nuevo Cliente
                    </NavLink>
            </nav>
        </div>
        <div className="md:w-4/5 px-10 py-5">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout