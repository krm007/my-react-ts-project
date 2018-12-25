import { RouteConfig } from "react-router-config";
import MyApp from "../views/MyApp";

const routerConfigs:RouteConfig[]=[
    {
        component:MyApp,
        exact:true,
        path:"/"
    }
];

export default routerConfigs;
