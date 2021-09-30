exports.listPais = () => {
    return "SELECT * FROM Pais";
};

exports.getPaisById = (id) => {
    return `SELECT * FROM Pais where id = '${id}'`;
};

exports.createPais = (Pais) => {
    return `
      INSERT INTO Pais(nombre, moneda)
      VALUES(
        '${Pais.nombre}',
        '${Pais.moneda}'
      )`;
};

exports.editPais = (Pais, id) => {
    return `
      UPDATE Pais SET
          nombre = '${Pais.nombre}',
          moneda = '${Pais.moneda}',
          WHERE id = ${id}
      `;
};
exports.deletePais = (id) => {
    return `DELETE FROM Pais WHERE id = '${id}'`;
};
