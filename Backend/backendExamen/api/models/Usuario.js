/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      columnName: 'fecha_nacimiento',
      required: true
    },

    usuarioId: {
      collection: 'RolesPorUsuario', // Modelo Hijo
      via: 'usuario_id' // Nombre del Campo
    },

    soId: {
      collection: 'SistemaOperativo', // Modelo Hijo
      via: 'so_id' // Nombre del Campo
    },

  },

};

