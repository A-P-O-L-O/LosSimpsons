import { Route, Routes } from "react-router-dom"
import Navbar from "./barraNav/Navbar"
import Personajes from "./componentes/Personajes"
import Simp from "./componentes/Simp"
import Provider from "./globalVariables/Provider"

const App = () => {

  const recargar = () => {
    window.location.reload()
  }



  return (
    <>
      <Provider>
        <Navbar></Navbar>
        <h1 onClick={recargar} style={{ textAlign: 'center', marginTop: '60px',cursor:'pointer' }}>LOS SIMPSONS</h1>
        <Routes>
          <Route path="/" element={<div className="container">
            <Personajes />
          </div>} />
          <Route path="/personajes" element={<Simp miObjeto={{}} />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
