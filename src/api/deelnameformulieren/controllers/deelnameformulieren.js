"use strict";

/**
 * deelnameformulieren controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// FORMER FROM INSTALL
module.exports = createCoreController(
  "api::deelnameformulieren.deelnameformulieren"
);

// ADJUSTED TO INCLUDE USERS RELATION, AS WRITTEN HERE:
// https://strapi.io/blog/how-to-use-the-nuxt-strapi-module-to-add-authentication-to-a-nuxt-application
// module.exports = createCoreController(
//   "api::deelnameformulieren.deelnameformulieren",
//   ({ strapi }) => ({
//     async findOne(ctx) {
//       console.log(ctx.request.params.id);
//       const data = await strapi
//         .service("api::deelnameformulieren.deelnameformulieren")
//         .findOne(ctx.request.params.id, {
//           populate: ["Image", "users_permissions_user"],
//         });
//       delete data.users_permissions_user.password;
//       return data;
//     },
//   })
// );
