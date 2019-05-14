import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import {timeOut} from '../../component/common/redux/actionCreators'
/*提示信息*/
class MessageDialog extends Component{
    static propTypes={
        msg:PropTypes.string.isRequired,
        time:PropTypes.number,
        timeOut:PropTypes.func,
    }
  /*  state={
        time:this.props.time
    }*/
    timeOut(){
        this.props.timeOut(this.props.time);
    }
     render(){
        if(this.props.msg===''){
            return <div></div>
        }else{
            if(this.props.time&&this.props.time!==0){
                this.timeOut();
            }
             return (<div className='showFixedMessage'>
                 <div className='txt-content'>
                     {this.props.msg}
                 </div>
             </div>)
         }
     }
}

export default connect(state=>({msg:state.doMessage.msg,time:state.doMessage.time}),
    {timeOut})(MessageDialog)
