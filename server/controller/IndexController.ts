import IndexService from "@services/IndexService";
// @ts-ignore
import { Request, Response } from "express";

class AuthController {
    private IndexService: IndexService;

    constructor() {
        this.IndexService = new IndexService();
    }

    public sortNumbers = (req: Request, res: Response) => {

        this.IndexService.sortNumbers(req)
            .then((response: any) => {
                res.status(response?.status).send(response?.message);
            }).catch((err: any) => {
                res.status(500).send(err.message);
            })
    }

    
}

export default AuthController;