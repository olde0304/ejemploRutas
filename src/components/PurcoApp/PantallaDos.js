import React from 'react'
import { Flechas } from './Flechas'

export const PantallaDos = ({ history }) => {

    const { location: { pathname: urlPantalla_2 } } = history

    return (
        <>
            <Flechas
                urlPantalla_2={urlPantalla_2}
            />

            <div className="contenedorCentral">
                <p className="contenedorCentral__text">aqui va toda la logica del proceso de pago 2</p>
            </div>
        </>


    )
}
