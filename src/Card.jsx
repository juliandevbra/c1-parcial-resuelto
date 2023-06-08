//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({user}) {
  return (
    <div>
      <h2>Hola {user.name}</h2>
      <h4>Sabemos que tu color favorito es:</h4>
      <h3 style={{backgroundColor: user.color}}>{user.color}</h3>
    </div>
  );
}

export default Card;
