import "./paths";
import IndexRoute from "@routes/IndexRoute";
import App from "./app";

const app = new App([new IndexRoute()]);
app.listen();