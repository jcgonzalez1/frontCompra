import React, { useEffect, useState } from  'react' ; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const ListaCompras = () =>{ 

    const [compras, setCompras]  = useState([]);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/compras')
        .then(response => {
            setCompras(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    const handleEliminarCompra = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/compras/${id}`)
        .then(response => {
            setCompras(compras.filter(compra => compra.id !== id));
        })
        .catch(error => {
            console.error(error);
        } );
    };


    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">ID Encabezado</th>
                        <th scope="col">ID Producto</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map(compra => (
                        <tr key={compra.id}>
                            <th scope ="row">{compra.id}</th>
                            <td>{compra.cantidad}</td>
                            <td>{compra.precio}</td>
                            <td>{compra.id_encabezado}</td>
                            <td>{compra.id_producto}</td>
                            <td>
                                <Link to={`/editarCompra/${compra.id}`} classsName="btn btn-primary mr-2">Editar</Link>
                                <button className="btn btn-danger" onClick={() => handleEliminarCompra(compra.id)}>Eliminar</button>
                            </td>                       
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default ListaCompras;