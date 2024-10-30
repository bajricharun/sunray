"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res, next) => {
    try {
        const status = error.status || 500;
        const message = error.message || "Unexpected error";
        res.status(status).json({
            success: false,
            payload: null,
            message: "Unexpected error.",
            error: message,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware;
