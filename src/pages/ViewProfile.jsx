
const VerPerfil = () => {

  return (
    <div className="perfil-usuario">
      <h2>Perfil de Usuario</h2>
      <div className="detalles-perfil">
        <div className="campo">
          <label>Nombre:</label>
          <span>{'No especificado'}</span>
        </div>
        <div className="campo">
          <label>Email:</label>
          <span>{}</span>
        </div>
        <div className="campo">
          <label>Rol:</label>
          <span>{'No especificado'}</span>
        </div>
        <div className="campo">
          <label>Fecha de registro:</label>
          <span>{ 'No disponible'}</span>
        </div>
      </div>
    </div>
  );
};

export default VerPerfil;