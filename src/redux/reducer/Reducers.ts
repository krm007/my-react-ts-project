import {fromJS} from "immutable";
import {handleActions} from "redux-actions";
import {AnyAction} from "redux";
import {combineReducers} from "redux-immutable";
import {GET_TABLE_DATA} from "../actionType";

const tableData=handleActions<any>({
    [GET_TABLE_DATA]:(state,action:AnyAction)=>{
        return state.set("data",fromJS(action.payload))
    }
},fromJS({data:[]}));

export default combineReducers({
    tableData,
});