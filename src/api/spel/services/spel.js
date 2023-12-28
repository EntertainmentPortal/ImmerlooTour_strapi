'use strict';

/**
 * spel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spel.spel');
