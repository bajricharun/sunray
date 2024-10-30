"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const module_alias_1 = require("module-alias");
(0, module_alias_1.addAliases)({
    "@controllers": `${__dirname}/controller`,
    "@services": `${__dirname}/service`,
    "@middlewares": `${__dirname}/middleware`,
    "@types": `${__dirname}/type`,
    "@interfaces": `${__dirname}/interface`,
    "@utils": `${__dirname}/util`,
    "@routes": `${__dirname}/route`,
});
