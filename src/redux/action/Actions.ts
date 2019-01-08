import { createAction } from "redux-actions";
import { GET_TABLE_DATA } from "../actionType";

/** 获取表格数据 */
export const getTableData = createAction(GET_TABLE_DATA, (data:any) => {
  return data;
});
