import React from 'react'

const Form = ({setUser, handleSubmit}) => {
    const handleChange = (event) => {
        setUser((prevUser) => ({...prevUser, [event.target.name]: event.target.value}))
    }

  return (
    <form onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleChange}/>
        <input name="color" type="text" onChange={handleChange}/>
        <button>Enviar</button>
    </form>
  )
}

export default Form