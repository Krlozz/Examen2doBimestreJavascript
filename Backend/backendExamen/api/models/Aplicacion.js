/**
 * Aplicacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    pesoEnGigas: {
      type: 'number',
      columnName: 'peso_en_gigas',
      columnType: 'decimal(6,2)',
      required: true
    },
    version: {
      type: 'number',
      columnName: 'version',
      columnType: 'int',
      required: true
    },
    nombre: {
      type: 'string',
      required: true
    },
    urlDescarga: {
      type: 'string',
      columnName: 'url_descarga',
      required: true
    },
    fechaLanzamiento: {
      type: 'string',
      columnName: 'fecha_lanzamiento',
      required: true
    },
    costo: {
      type: 'number',
      columnName: 'peso_en_gigas',
      columnType: 'decimal(6,2)',
      required: true
    },

    sistema_operativo_id: {
      model: 'SistemaOperativo' // Modelo Papa
    },

    tablaAplicacionId: {
      collection: 'EventoPorAplicacion', // Modelo Hijo
      via: 'tabla_aplicacion_id' // Nombre del Campo
    },

  },

};

