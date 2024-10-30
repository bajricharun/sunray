"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ErrorMiddleware_1 = __importDefault(require("@middlewares/ErrorMiddleware"));
class App {
    constructor(routes) {
        this.listen = () => {
            this.app.listen(this.port, () => {
                console.log(`[server]: Server is running @ http://localhost:${this.port}`);
            });
        };
        this.initializeMiddlewares = () => {
            this.app.use(express_1.default.json());
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.urlencoded({ extended: true }));
        };
        this.initializeRoutes = (routes) => {
            routes.forEach((route) => {
                this.app.use("", route.router);
            });
        };
        this.app = (0, express_1.default)();
        this.port = 8080;
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        this.initializeErrorHandler();
    }
    initializeErrorHandler() {
        this.app.use(ErrorMiddleware_1.default);
    }
}
exports.default = App;
