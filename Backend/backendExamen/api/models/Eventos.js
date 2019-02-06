/**
 * Eventos.js
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
    fecha: {
      type: 'string',
      columnName: 'fecha',
    },
    latitud: {
      type: 'string',
      columnName: 'latitud',
    },
    longitud: {
      type: 'string',
      columnName: 'longitud',
    },

    tablaEventoId: {
      collection: 'EventoPorAplicacion', // Modelo Hijo
      via: 'tabla_evento_id' // Nombre del Campo
    },

  },

};

