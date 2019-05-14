/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const iconList=[
    {title:'待办任务',url:'/',class:'icon-schedule',pages:'home'},
    {title:'学习进度',url:'/progress',class:'icon-progress',pages:'progress'},
    {title:'我的草稿',url:'/draft',class:'icon-draft',pages:'draft'},
    {title:'学习日历',url:'/calender',class:'icon-calendar',pages:'calender'},
    {title:'我的作品',url:'/works',class:'icon-works',pages:'works'},
    {title:'我的课堂',url:'/classroom',class:'icon-classroom',pages:'classroom'},
];
function home(state=iconList,action) {
    switch (action.type) {
        default:
            return state;
    }
};


/*const nav=combineReducers({homeNav,myNav});
export default nav*/
export default  home ;