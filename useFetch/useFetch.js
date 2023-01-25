import {useState, useEffect} from 'react';

const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError:null,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading:true,//para setear el valor a true de isLoading, es necesario hacer spread a todo el state, ya que es un objeto
        })

        const resp = await fetch( url );
        const data = await resp.json();

        setState({
            data,
            isLoading:false,
            hasError:null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

export default useFetch
