import {SHOW_MESSAGE,DOING_MESSAGE,REMOVE_MESSAGE,RELOAD_PAGE} from './action-types';

/*
  reducer:一个纯函数，用于状态管理
  根据老的状态产生新的状态，交给store来更新状态
* */
const init={
    type:'',//show,doing,remove
    msg:'',
    time:0,
    isValid:false
};

function doMessage(state=init,action) {
    // debugger
    switch (action.type) {
        case SHOW_MESSAGE:
            // debugger
            return  action.data;
       case DOING_MESSAGE:
            return  action.data;
       case REMOVE_MESSAGE:
            return  action.data;
       default:
            return {...state};
    }
};

export default doMessage;