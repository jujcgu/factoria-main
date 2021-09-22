exports.selectCiudad = () => {
    return "SELECT * FROM ciudad";
  };  
  
  exports.insertCiudad = (ciudad) => {
    return `
        INSERT INTO ciudad(id, nombre, departamento_id)
        VALUES(
          '${ciudad.id}',
          '${ciudad.nombre}',
          '${ciudad.departamento_id}'
        )`;
  };
  
  exports.updateCiudad = (nombre, departamento_id, codigo_postal, id) => {
    return`
    UPDATE ciudad SET
    nombre = '${ciudad.nombre}',
    departamento_id = '${ciudad.departamento_id}',
    codigo_postal = '${ciudad.codigo_postal}',
    WHERE id = ${id}
    `;
  };
  
  exports.deleteCiudad = (id) => {
    return `DELETE FROM ciudad WHERE id = '${id}'`;
  };  