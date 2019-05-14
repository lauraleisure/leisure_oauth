import {VALIDATE_USERNAME,VALIDATE_PASSWORD,VALIDATE_PHONE,VALIDATE_IDCARD} from './action-types'


/*同步刷新页面*/
export const validateUserName=(msg)=>({type:VALIDATE_USERNAME,data:msg});
export const validatePassword=(msg)=>({type:VALIDATE_PASSWORD,data:msg});
export const validatePhone=(msg)=>({type:VALIDATE_PHONE,data:msg});
export const validateIDCard=(msg)=>({type:VALIDATE_IDCARD,data:msg});


/*手机号格式验证*/
export const  cellPhoneRegExp=(val)=>{
    return dispatch=>{
        var reg = /^(1[3-9]{1})+\d{9}$/;
        var initMsg={};
        if(!reg.test(val)){
            initMsg={msg:'手机号格式错误',time:3}
            dispatch(validatePhone(initMsg));
        }/*else{
            initMsg ={msg:''};
            dispatch(removeMessage(initMsg));
        }*/
    }
};
/*随机验证码操作--4位纯数字*/
export const  verifyCodeRegExp=(val)=>{
    return dispatch=>{
        var reg = /^\d{4}$/;
        var initMsg={};
        if(!reg.test(val)){
            initMsg={msg:'校验码格式错误',time:1};
            // dispatch(showMessage(initMsg));
        }else{
            initMsg ={msg:''};
            // dispatch(removeMessage(initMsg));
        }
    }
};
/*短信验证码---6位纯数字*/
export const  cellPhoneCodeRegExp=(val)=>{
    return dispatch=>{
        var reg = /^\d{6}$/;
        var initMsg={};
        if(!reg.test(val)){
            initMsg={msg:'短信验证码格式错误',time:1};
            // dispatch(showMessage(initMsg));
        }else{
            initMsg ={msg:''};
            // dispatch(removeMessage(initMsg));
        }
    }
};
/*密码--4~16为数字+字母*/
export const  passwdRegExp=(val)=>{
    return dispatch=>{
        var regl = /^[0-9a-z]{4,16}$/i;
        var reg = /^[0-9a-z]+([0-9]{1}[a-z]{1}||[a-z]{1}[0-9]{1})[0-9a-z]+$/i;
        var initMsg={};
        if(!(reg.test(val) && regl.test(val))){
            initMsg={msg:'密码格式错误',time:1};
            // dispatch(showMessage(initMsg));
        }else{
            initMsg ={msg:''};
            // dispatch(removeMessage(initMsg));
        }
    }
};
/*金额格式验证*/
export const  moneyRegExp=(val)=>{
    return dispatch=>{
        var reg=/^\d+(\.\d{1,2})?$/;
        var initMsg={};
        if(!reg.test(val)){
            initMsg={msg:'金额格式错误',time:1};
            // dispatch(showMessage(initMsg));
        }else{
            initMsg ={msg:''};
            // dispatch(removeMessage(initMsg));
        }
    }
};
/*身份证格式验证*/
export const  cardIDRegExp=(val)=>{
    return dispatch=>{
        var  reg= /^\d{17}(\d|x)$/i;
        var  reg1= /^\d{14}(\d|x)$/i;
        var initMsg={};
        if(!(reg.test(val)||reg1.test(val))){
            initMsg={msg:'身份证格式错误',time:1};
            // dispatch(showMessage(initMsg));
        }else{
            initMsg ={msg:''};
            // dispatch(removeMessage(initMsg));
        }
    }
};
