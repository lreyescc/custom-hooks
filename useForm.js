/*
  Este formulario sirve para no reescribir código, obtiene los datos de los inputs para setearlos al state,
  luego exporta  el estado y la funcion que controla los cambios en los inputs
*/

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ({target}) => {
        const { name, value} = target;
        setFormState({
            ...formState,//para mantener todos los valores del formulario porque pueden ser muchos
            [ name ]: value
        });
    }// segun sea la propiedad name de la etqueta, se va ir a guardar

    const onResetForm = () => {
        setFormState(initialForm);
    }

  return {
    ...formState,
    onInputChange,
    onResetForm,
    formState
  }
}