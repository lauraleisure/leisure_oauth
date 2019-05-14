import Q from 'q';
import {SHOW_MESSAGE,DOING_MESSAGE,REMOVE_MESSAGE} from './action-types'

import {doLogin,reloadPage} from '../../../views/login/redux/actionCreators'

/*同步刷新页面*/
export const showMessage=(msg)=>({type:SHOW_MESSAGE,data:msg});
export const doingMessage=(msg)=>({type:DOING_MESSAGE,data:msg});
export const removeMessage=(msg)=>({type:REMOVE_MESSAGE,data:msg});


/*异步：从后台获取数据*/
export const  timeOut=(time)=>{
    return dispatch=>{
        //模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const initMsg ={msg:''};
            //分发一个异步的action
            dispatch(removeMessage(initMsg));
        },time*1000);
    }
};
/*登录时，输入有效性的验证*/
export const validateInput=(input)=>{
    return dispatch=> {
        var initMsg='';
        /*用户名格式验证：*/
        if (input.username==='') {
            initMsg={msg:'用户名不能为空',time:3};
            dispatch(showMessage(initMsg));
            return;

        }
        if (!cellPhoneRegExp(input.username)) {
            initMsg={msg:'用户名格式错误',time:3};
            Q.all([dispatch(showMessage(initMsg))]).then(function () {
                return reloadPage({url:'/login',time:0.01});
            });
        }
        if (input.password==='') {
            initMsg={msg:'密码不能为空',time:3};
            dispatch(showMessage(initMsg));
            return;
        }
        /*密码格式验证：*/
        if (!passwdRegExp(input.password)) {
          initMsg={msg:'密码格式错误',time:1};
          dispatch(showMessage(initMsg));
          return;
        }

    }
};
/*登录时，输入有效性的验证*/
export const validateLogin=(input)=>{
    return dispatch=> {
        var initMsg='';
        /*用户名格式验证：*/
        if (input.username==='') {
            initMsg={msg:'用户名不能为空',time:3};
            dispatch(showMessage(initMsg));
            return;
        }
        if (!cellPhoneRegExp(input.username)) {
            initMsg={msg:'用户名格式错误',time:3};
            dispatch(showMessage(initMsg));
            return;
        }
        if (input.password==='') {
            initMsg={msg:'密码不能为空',time:3};
            dispatch(showMessage(initMsg));
            return;
        }
        /*密码格式验证：*/
        if (!passwdRegExp(input.password)) {
          initMsg={msg:'密码格式错误',time:1};
          dispatch(showMessage(initMsg));
          return;
        }
        dispatch(doLogin(input));
    }
};
export const validateRegist=(input)=>{
    return dispatch=> {
        var initMsg='';
        /*用户名格式验证：*/
        if (!cellPhoneRegExp(input.phone)) {
            initMsg={msg:'手机号格式错误',time:3};
            dispatch(showMessage(initMsg));
            return;
        }
        /*密码格式验证：*/
        if (!passwdRegExp(input.password)) {
          initMsg={msg:'密码格式错误',time:1};
          dispatch(showMessage(initMsg));
          return;
        }
        dispatch(doLogin(input));
    }
};

//验证手机号码
export const cellPhoneRegExp = function (val) {
    var reg = /^(1[3-9]{1})+\d{9}$/;
    return reg.test(val);
};
//随机验证码操作--4位纯数字
var verificationCodeRegExp = function(val) {
    var reg = /^\d{4}$/;
    return reg.test(val);
};
//短信验证码---6位纯数字
var cellPhoneCodeRegExp = function(val) {
    var reg = /^\d{6}$/;
    return reg.test(val);
};
//密码--4~16为数字+字母
var passwdRegExp = function(val) {
    var regl = /^[0-9a-z]{4,16}$/i;
    var reg = /^[0-9a-z]+([0-9]{1}[a-z]{1}||[a-z]{1}[0-9]{1})[0-9a-z]+$/i;
    return reg.test(val) && regl.test(val);
};
var moneyRegExp=function(val) {
    var reg=/^\d+(\.\d{1,2})?$/;
    return reg.test(val);

};
/*身份证长度或格式验证*/
var cardIDRegExp=function(cardId){
    var  reg= /^\d{17}(\d|x)$/i;
    var  reg1= /^\d{14}(\d|x)$/i;
    return (reg.test(cardId)||reg1.test(cardId));
};

