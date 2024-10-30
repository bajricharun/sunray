import { NextFunction, Request, Response } from "express";
import HttpException from "@utils/Exception";

const errorMiddleware = (
    error: HttpException,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const status: number = error.status || 500;
        const message: string = error.message || "Unexpected error";

        res.status(status).json({
            success: false,
            payload: null,
            message: "Unexpected error.",
            error: message,
        });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;