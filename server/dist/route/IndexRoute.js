"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(require("@routes/Route"));
const IndexController_1 = __importDefault(require("@controllers/IndexController"));
class IndexRoute extends Route_1.default {
    constructor() {
        super("/api", new IndexController_1.default());
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/sort-numbers`, this.controller.sortNumbers);
    }
}
exports.default = IndexRoute;
