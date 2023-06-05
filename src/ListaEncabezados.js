import React, { useEffect, useState } from  'react' ; 
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const ListaEncabezados = () =>{ 

    const [encabezados, setEncabezados]  = useState([]);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/encabezado')
        .then(response => {
            setEncabezados(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    },[]);

    const handleEliminarEncabezado = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/encabezado/${id}`)
        .then(response => {
            setEncabezados(encabezados.filter(encabezado => encabezado.id !== id));
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
                        <th scope="col">Codigo Factura</th>
                        <th scope="col">Fecha de compra</th>
                        <th scope="col">Opciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {encabezados.map(encabezado => (
                        <tr key={encabezado.id}>
                            <th scope ="row">{encabezado.id}</th>
                            <td>{encabezado.codigoFactura}</td>
                            <td>{encabezado.fechaCompra}</td>
                            <td>
                                <Link to={`/editarEncabezado/${encabezado.id}`} classsName="btn btn-primary mr-2">Editar</Link>
                                <button className="btn btn-danger" onClick={() => handleEliminarEncabezado(encabezado.id)}>Eliminar</button>
                            </td>                       
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default ListaEncabezados;