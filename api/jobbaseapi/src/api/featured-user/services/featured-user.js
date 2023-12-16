'use strict';

/**
 * featured-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-user.featured-user');
