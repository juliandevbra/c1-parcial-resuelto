import { useState } from "react";
import Card from "./Card";
import Form from "./Form";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [user, setUser] = useState({
    name: '',
    color: '',
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(user.name.trim().length > 2 && user.color.length > 5){
      setShow(true)
      setError(false)
    }else {
      setError(true)
    }
  }

  return (
    <div className="App">
      <h1>Elige un color</h1>
        <Form setUser={setUser} handleSubmit={handleSubmit}/>
        {error && <p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p>}
        {show && <Card user={user}/> }
    </div>
  );
}

export default App;
