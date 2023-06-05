


import React from 'react';

const Nav = () => {
    return (
        <nav className='navbar navbar-expand lg navbar-dark bg-dark'>
            <div className='container'>
                <a className='navbar-brand' href='/'>Home</a>
                <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navBarNav">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='navbar-brand' href="/listaEncabezado">Encabezados</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navbar-brand' href="/agregarEncabezado">Agregar Encabezado</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navbar-brand' href="/listaCompra">Compras</a>
                        </li>
                        <li className='nav-item'>
                            <a className='navbar-brand' href="/agregarCompra">Agregar Compras</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
