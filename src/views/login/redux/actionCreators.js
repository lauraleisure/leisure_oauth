import {LOGIN_SUCCESS,RELOAD_PAGE} from './action-types'



/*同步刷新页面*/
export const loginSuccess=(user)=>({type:LOGIN_SUCCESS,data:user});
export const reloadPage=(msg)=>({type:RELOAD_PAGE,data:msg});



/*异步：从后台获取数据*/
export const  doLogin=(user)=>{
    console.log('登陆方法....');
    /*   debugger*/
    return dispatch=>{
        //模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const init ={
                username:user.username,
                password:user.password,
                url:'/home',
                time:0.01,
            };
            //分发一个异步的action
            //根据登陆权限的判断，跳转到不同首页
            dispatch(loginSuccess(init));
        },1000)
    }
};
