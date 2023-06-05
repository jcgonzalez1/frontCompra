import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const AgregarEncabezado = () => {
    const [codigoFactura, setCodigoFactura] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    
    const navigate = useNavigate();

    const handleSubmit =(event) => {
        event.preventDefault();
        const nuevoEncabezado = {
            codigoFactura: codigoFactura,
            fechaCompra: fechaCompra,
           
        };
        axios.post('http://127.0.0.1:8000/api/encabezado', nuevoEncabezado)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            });
        setCodigoFactura('');
        setFechaCompra('');
        
    };

    return (
        <div className="container">
            <h2>Agregar Encabezado</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="codigoFactura">Titulo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="codigoFactura"
                        placeholder="Codigo de factura"
                        value={codigoFactura}
                        onChange={(e) => setCodigoFactura(e.target.value)}
                    />
               </div>
                <div className="form-group">
                    <label htmlFor="fechaCompra">Autor</label>
                    <input
                        type="date"
                        className="form-control"
                        id="fechaCompra"
                        placeholder="Fecha de compra"
                        value={fechaCompra}
                        onChange={(e) => setFechaCompra(e.target.value)}
                    />
                </div>
                
                <button type="submit" className='btn btn-primary'>Agregar Encabezado</button>
            </form>
        </div>
    );

};
export default AgregarEncabezado;