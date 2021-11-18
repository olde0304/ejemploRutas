import React, { useState } from 'react'
import { Flechas } from './Flechas'
import { critomendas } from '../Criptomonedas';
import { useForm } from '../../hooks/useForm';

export const PantallaUno = () => {

    const moneda = Object.values(critomendas)

    const [formValues, handleInputChange] = useForm(
        {
            monedaSeleccionada: ''
        }
    )
    
    const {monedaSeleccionada} = formValues;
    
    console.log(monedaSeleccionada)

    return (
        <>
            <Flechas />

            <div className="contenedorCentral">
                <p className="contenedorCentral__text">aqui va toda la logica del proceso de pago 1</p>

                <div className="contendorComboBox">
                    <label className="">Critomonedas</label>
                    <select name="monedaSeleccionada" onClick={handleInputChange} className="selector" >
                        <option value={monedaSeleccionada}>Selecione</option>
                        {
                            moneda.map((m, i) => (
                                <option key={i} value={m.name}>{m.name}</option>
                            ))
                        }
                    </select>
                </div>


            </div>
        </>
    )
}
