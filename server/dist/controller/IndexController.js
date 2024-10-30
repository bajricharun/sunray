"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexService_1 = __importDefault(require("@services/IndexService"));
class AuthController {
    constructor() {
        this.sortNumbers = (req, res) => {
            this.IndexService.sortNumbers(req)
                .then((response) => {
                res.status(response === null || response === void 0 ? void 0 : response.status).send(response === null || response === void 0 ? void 0 : response.message);
            }).catch((err) => {
                res.status(500).send(err.message);
            });
        };
        this.IndexService = new IndexService_1.default();
    }
}
exports.default = AuthController;
