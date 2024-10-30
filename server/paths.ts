import "module-alias/register";

import { addAliases } from "module-alias";

addAliases({
    "@controllers": `${__dirname}/controller`,
    "@services": `${__dirname}/service`,
    "@middlewares": `${__dirname}/middleware`,
    "@types": `${__dirname}/type`,
    "@interfaces": `${__dirname}/interface`,
    "@utils": `${__dirname}/util`,
    "@routes": `${__dirname}/route`,
});