import * as loadable from "react-loadable";
import Loading from "./Loading";

export const PageOne = loadable({
  loading: Loading,
  loader: () => import("../views/childComponent/PageOne")
});
