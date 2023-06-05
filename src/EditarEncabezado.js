import React, { useEffect, useState , useCallback} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const EditarEncabezado = () => {
    const { id } =useParams();
    const [codigoFactura, setCodigoFactura] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    
    const navigate = useNavigate();

    const obtenerEncabezado = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/encabezado/${id}`)
            .then(response => {
                const encabezado = response.data;
                setCodigoFactura(encabezado.codigoFactura);
                setFechaCompra(encabezado.fechaCompra);
                
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);
    
    useEffect(() => {
        obtenerEncabezado();
    }, [obtenerEncabezado]);

    const editarEncabezado = (event) => {
        event.preventDefault();

        const encabezadoEditado = {
            codigoFactura: codigoFactura,
            fechaCompra: fechaCompra,
            
        };

        axios.put(`http://127.0.0.1:8000/api/encabezado/${id}`, encabezadoEditado)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
    };
return (
    <div>
        <h2>Editar Encabezado</h2>
        <form onSubmit={editarEncabezado}>
            <div className="form-group">
                <label> codigo Factura </label>
                <input type="text" className="form-control" value={codigoFactura} onChange={e => setCodigoFactura(e.target.value)} />
            </div>
            <div className="form-group">
                <label> fecha de compra </label>
                <input type="date" className="form-control" value={fechaCompra} onChange={e => setFechaCompra(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-primary"> Editar </button>
        </form>
    </div>
);
};

export default EditarEncabezado;
