import {SET_CRUMB} from "./action-types";

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const initCrumb={
    hasGoBack:true,
    hasLogout:true,
    title:'',
    backUrl:'',

};
function crumbs(state=initCrumb,action) {
    switch (action.type) {
        case SET_CRUMB:
            return  action.data;
        default:
            return state;
    }
};

export default crumbs;