'use strict';

/**
 * registreer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::registreer.registreer');
