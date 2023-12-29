'use strict';

/**
 * registreer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::registreer.registreer');
