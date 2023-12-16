import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({ children }) => {
    const [elemento, setElemento] = useState({})
    return (
        <Contexto.Provider value={{ setElemento, elemento }}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider
