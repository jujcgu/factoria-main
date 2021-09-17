exports.listDepartamento = () => {
  return "SELECT * FROM departamento";
};

exports.getDepartamentoById = (id) => {
  return `SELECT * FROM departamento where id = '${id}'`;
};

exports.createDepartamento = (departamento) => {
  return `
      INSERT INTO departamento(id, nombre, pais_id)
      VALUES(
        '${departamento.id}',
        '${departamento.nombre}',
        '${departamento.pais_id}'
      )`;
};

exports.editDepartamento = (departamento, id) => {
  return `
      UPDATE departamento 
          SET
          nombre = '${departamento.nombre}',
          pais_id = '${departamento.pais_id}',
          WHERE id = ${id}
      `;
};

exports.deleteDepartamento = (id) => {
  return `DELETE FROM departamento WHERE id = '${id}'`;
};
