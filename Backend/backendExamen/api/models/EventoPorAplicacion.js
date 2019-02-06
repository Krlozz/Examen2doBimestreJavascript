/**
 * EventoPorAplicacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tabla_evento_id: {
      model: 'evento' // Modelo Papa
    },

    tabla_aplicacion_id: {
      model: 'Aplicacion' // Modelo Papa
    },

  },

};

