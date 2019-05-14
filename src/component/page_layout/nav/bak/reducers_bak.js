import {combineReducers} from 'redux'

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const homeTabs=[
    {title:'首页',url:'/home',class:'icon-home',width:'30%',activeItem:'home',pages:'home'},
    {title:'评论',url:'/comment',class:'icon-comment',width:'30%',activeItem:'comment',pages:'comment'},
    {title:'我的',url:'/my',class:'icon-my',width:'30%',activeItem:'my',pages:'my'}
];
function homeNav(state=homeTabs,action) {
    switch (action.type) {
        default:
            return state;
    }
};

const initTabs=[
    {title:'首页',url:'/home',class:'icon-home',width:'30%',pages:'home'},
    {title:'日志',url:'/comment',class:'icon-comment',width:'30%',pages:'comment'},
    {title:'我的',url:'/my',class:'icon-my',width:'30%',pages:'my'}
];
function myNav(state=initTabs,action) {
    switch (action.type) {
        default:
            return state;
    }
};
/*const nav=combineReducers({homeNav,myNav});
export default nav*/
export default combineReducers({homeNav,myNav});