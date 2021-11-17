import React from 'react'

export const Flechas = ({ urlPantalla_2, urlPantalla_3 }) => {


    return (
        <div className="contenedorFlechas">
            <div className="contenedorFlechas__figura 
                            contenedorFlechas__figura-1">
                <p className="contenedorFlechas__figura-text">
                    Proceso de pago 1
                </p>
            </div>

            {
                <div className={`contenedorFlechas__figura 
                                ${urlPantalla_2 || urlPantalla_3 
                                    ?
                                        "contenedorFleclas__figura-2" 
                                    : 
                                        "contenedorFlechas__figuraGray"}`}>
                    <p className="contenedorFlechas__figura-text">
                        Proceso de pago 2
                    </p>
                </div>
            }

            {
                <div className={`contenedorFlechas__figura 
                                ${urlPantalla_3 
                                    ? 
                                        "contenedorFlechas__figura-3" 
                                    : 
                                        "contenedorFlechas__figuraGray"}`}>
                    <p className="contenedorFlechas__figura-text">
                        Proceso de pago 3
                    </p>
                </div>
            }
        </div>
    )
}
