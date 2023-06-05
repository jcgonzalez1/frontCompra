import React, { useEffect, useState , useCallback} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const EditarCompra = () => {
    const { id } =useParams();
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [id_encabezado, setIdEncabezado] = useState('');
    const [id_producto, setIdProducto] = useState('');
    const navigate = useNavigate();

    const obtenerCompra = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/compras/${id}`)
            .then(response => {
                const compra = response.data;
                setCantidad(compra.cantidad);
                setPrecio(compra.precio);
                setIdEncabezado(compra.id_encabezado);
                setIdProducto(compra.id_producto);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);
    
    useEffect(() => {
        obtenerCompra();
    }, [obtenerCompra]);

    const editarCompra = (event) => {
        event.preventDefault();

        const compraEditada = {
            cantidad: cantidad,
            precio: precio,
            id_encabezado: id_encabezado,
            id_producto: id_producto
        };

        axios.put(`http://127.0.0.1:8000/api/compras/${id}`, compraEditada)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };
return (
    <div>
        <h2>Editar Compra</h2>
        <form onSubmit={editarCompra}>
            <div className="form-group">
                <label> Cantidad </label>
                <input type="number" className="form-control" value={cantidad} onChange={e => setCantidad(e.target.value)} />
            </div>
            <div className="form-group">
                <label> Precio </label>
                <input type="number" step="0.01" pattern="\d+(\.\d{2})?" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} />
            </div>
            <div className="form-group">
                <label>ID Encabezado</label>
                <input type="number" className="form-control" value={id_encabezado} onChange={e => setIdEncabezado(e.target.value)} />
            </div>
            <div className="form-group">
                <label>ID Producto</label>
                <input type="number" className="form-control" value={id_producto} onChange={e => setIdProducto(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary"> Editar </button>
        </form>
    </div>
);
};

export default EditarCompra;
