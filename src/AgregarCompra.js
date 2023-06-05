import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const AgregarCompra = () => {
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [id_encabezado, setIdEncabezado] = useState('');
    const [id_producto, setIdProducto] = useState('');
    const navigate = useNavigate();

    const handleSubmit =(event) => {
        event.preventDefault();
        const nuevaCompra = {
            cantidad: cantidad,
            precio: precio,
            id_encabezado: id_encabezado,
            id_producto: id_producto
        };
        axios.post('http://127.0.0.1:8000/api/compras', nuevaCompra)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
        setCantidad('');
        setPrecio('');
        setIdEncabezado('');
        setIdProducto('');
    };

    return (
        <div className="container">
            <h2>Agregar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        id="cantidad"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
               </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                        type="number"
                        step="0.01"
                        pattern="\d+(\.\d{2})?"
                        className="form-control"
                        id="precio"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_encabezado">ID Encabezado</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_encabezado"
                        placeholder="ID Encabezado"
                        value={id_encabezado}
                        onChange={(e) => setIdEncabezado(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="id_producto">ID Producto</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id_producto"
                        placeholder="ID Producto"
                        value={id_producto}
                        onChange={(e) => setIdProducto(e.target.value)}
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Agregar Compra</button>
            </form>
        </div>
    );

};
export default AgregarCompra;