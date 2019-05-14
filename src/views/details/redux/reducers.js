import {USER_DETAIL} from './action-types';

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const user={
    realName:'Leisure',
    sex:'female',
    phone:'18162779238',
    photo:'/images/user/user.jpg',
    code:'',
    pwd:'',
};

function userDetail(state=user,action) {
    switch (action.type) {
        case USER_DETAIL:
            return  action.data;
        default:
            return {...state};
    }
};

export default userDetail;