// import * as React from "react";
import { RouteConfig } from "react-router-config";
import { PageOne } from "../loading/LazyLoading";
import PageTwo from "../views/childComponent/PageTwo";
import Test from "../views/test/Test";

const Child: RouteConfig[] = [
  {
    path: "/pageOne",
    component: PageOne
    // component:()=> <PageOne />
  },
  {
    path: "/pageTwo",
    component: PageTwo
    // component:()=> <PageTwo />
  },
  {
    path: "/pageThree",
    component: Test
    // component:()=> <PageTwo />
  }
];

export default Child;
