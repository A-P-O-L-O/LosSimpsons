import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../globalVariables/Contexto";

const Simp = () => {

    const navegacion = useNavigate();
    const { elemento } = useContext(Contexto);
    const { Nombre, Ocupacion, Genero, Historia, Estado, Imagen } = elemento

    const volver = () => {
        navegacion('/')
    }

    return (
        <>
            <div className="mostrar">
                <h1>{Nombre}</h1>
                <div>
                    <img src={Imagen} alt="Imagen" />
                </div>
                <div>
                    <h2><span>Ocupación: <br /></span>{Ocupacion}</h2>
                </div>
                <div className="informacion">
                    <h2><span>Género: </span>{Genero}</h2>
                    <h2> <span>Estado: </span>{Estado}</h2>
                </div>
                <div className="historia">
                    <h2><span>Historia: </span><br />{Historia}</h2>
                </div>

                <button onClick={volver}>Volver</button>

            </div>

        </>


    );
};

Simp.defaultProps = {
    Nombre: 'incognito',
    edad: 'desconocidad',
    come: 1
}

export default Simp;
