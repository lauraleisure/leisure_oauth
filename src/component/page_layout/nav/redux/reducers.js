// import {combineReducers} from 'redux'
import {HOME_NAV,MY_NAV} from "./action-types";

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const navConfig={
    homeNav:[
        {title:'首页',url:'/home',class:'icon-home',width:'30%',activeItem:'home',pages:'home'},
        {title:'评论',url:'/comment',class:'icon-comment',width:'30%',activeItem:'comment',pages:'comment'},
        {title:'我的',url:'/my',class:'icon-my',width:'30%',activeItem:'my',pages:'my'}
    ],
    myNav:[
        {title:'首页',url:'/home',class:'icon-home',width:'30%',pages:'home'},
        {title:'日志',url:'/comment',class:'icon-comment',width:'30%',pages:'comment'},
        {title:'我的',url:'/my',class:'icon-my',width:'30%',pages:'my'}
    ]
}
function nav(state=navConfig.homeNav,action) {
    switch (action.type) {
        case HOME_NAV:
            return navConfig.homeNav ;
        case MY_NAV:
            return navConfig.myNav;
        default:
            return navConfig.homeNav;
    }
};
export default nav;
/*const nav=combineReducers({homeNav,myNav});
export default nav*/
/*
export default combineReducers({homeNav,myNav,nav});*/
