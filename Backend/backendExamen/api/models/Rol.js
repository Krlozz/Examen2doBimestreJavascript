/**
 * Rol.js
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

    rolId: {
      collection: 'RolesPorUsuario', // Modelo Hijo
      via: 'rol_id' // Nombre del Campo
    }

  },

};

