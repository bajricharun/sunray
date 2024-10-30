import IRoute from "@interfaces/RouteInterface";
import MainRouter from "@routes/Route";
import IndexController from "@controllers/IndexController";
class IndexRoute extends MainRouter implements IRoute {
    constructor() {
        super("/api", new IndexController());

        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(
            `${this.path}/sort-numbers`,
            
            this.controller.sortNumbers
        );
    }
}

export default IndexRoute;