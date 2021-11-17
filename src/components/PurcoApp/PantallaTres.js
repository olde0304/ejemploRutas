import React from 'react'
import { Flechas } from './Flechas'

export const PantallaTres = ({ history }) => {

    const { location: { pathname: urlPantalla_3 } } = history

    return (
        <>
            <Flechas
                urlPantalla_3={urlPantalla_3}
            />

            <div className="contenedorCentral">
                <p className="contenedorCentral__text">aqui va toda la logica del proceso de pago 3</p>
            </div>
        </>
    )
}
