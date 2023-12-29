'use strict';

/**
 * registreer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registreer.registreer');
