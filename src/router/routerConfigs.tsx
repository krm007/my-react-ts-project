import { RouteConfig } from "react-router-config";
import MyApp from "../views/MyApp";
import Child from "./childRoutes";



const routerConfigs:RouteConfig[]=[
    {
        component:MyApp,
        path:"/",
        routes:Child
    }
];

export default routerConfigs;
