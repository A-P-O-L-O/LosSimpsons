import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contexto from '../globalVariables/Contexto';

const Personajes = () => {
    const url = 'https://apisimpsons.fly.dev/api/personajes?limit=650';
    const [personajes, setPersonajes] = useState([]);
    const navegacion = useNavigate();
    const { setElemento } = useContext(Contexto)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const datos = await response.json();
                setPersonajes(datos.docs);
            } catch (error) {
                console.error('Error al obtener datos:', error.message);
            }
        };

        fetchData();
    }, []);

    const mostrar = (persona) => {
        setElemento(persona)
        navegacion('/personajes',{replace:true})
    };

    return (
        <>
            {personajes.map((perso, index) => (
                <div className='componente' key={index}>
                    <div>
                        <h1>{perso.Nombre}</h1>
                    </div>
                    <div>
                        <img src={perso.Imagen} alt="Imagen" />
                    </div>
                    <div className='separacion'>
                        <button onClick={() => mostrar(perso)}>Mas Info..</button>
                    </div>
                </div>
            ))}
        </>
    );
};



export default Personajes;
