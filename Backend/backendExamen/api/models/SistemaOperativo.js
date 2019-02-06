/**
 * SistemaOperativo.js
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
    versionApi: {
      type: 'number',
      columnName: 'version_api',
      columnType: 'int',
      required: true
    },
    fechaLanzamiento: {
      type: 'string',
      columnName: 'fecha_lanzamiento',
      required: true
    },
    pesoEnGigas: {
      type: 'number',
      columnName: 'peso_en_gigas',
      columnType: 'decimal(6,2)',
      required: true
    },
    instalado: {
      type: 'boolean',
      required: true
    },

    so_id: {
      model: 'Usuario' // Modelo Papa
    },

    sistemaOperativoId: {
      collection: 'Aplicacion', // Modelo Hijo
      via: 'sistema_operativo_id' // Nombre del Campo
    },

  },

};

