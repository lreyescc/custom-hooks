//use es un estandar en react para indicar que es un hook
// es una  simple  funcion con un return

import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const incrementar = (value = 1) => { //tomarel parametro y setearlo con un valor por defecto
        setCounter( counter + value); //incremento segun el parametro recibido
    }

    const disminuir = () => {
        if( counter == 0 ) return  //par que no pase de cero
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        incrementar,
        disminuir,
        reset
    }
}