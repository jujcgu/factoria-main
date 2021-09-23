exports.listPais = () => {
    return "SELECT * FROM Pais";
};

exports.getPaisById = (id) => {
    return `SELECT * FROM Pais where id = '${id}'`;
};

exports.createPais = (Pais) => {
    return `
      INSERT INTO Pais(id, nombre, pais_id)
      VALUES(
        '${Pais.id}',
        '${Pais.nombre}',
        '${Pais.moneda}'
      )`;
};

exports.editPais = (Pais, id) => {
    return `
      UPDATE Pais 
          SET
          nombre = '${Pais.nombre}',
          id = '${Pais.id}',
          moneda = '${Pais.moneda}',
          WHERE id = ${id}
      `;
};


exports.deletePais = (id) => {
    return `DELETE FROM Pais WHERE id = '${id}'`;
};
