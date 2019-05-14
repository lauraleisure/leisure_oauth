import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'

import {userDetail} from './redux/actionCreators'
import './user.css'



class Avatar extends Component{
   static propTypes={
       user:PropTypes.object.isRequired,
       userDetail:PropTypes.func.isRequired,
   }
    componentWillMount(){

    }
    componentDidMount(){

    }

     render(){
          return (<div className='avatar-part flex-box jc-s ai-c'>
                <div className='photo'>
                    <img  src={this.props.user.photo} alt='头像' />
                </div>
              <div className='detail-wrap text-left'>
                  <div className='real-name'>{this.props.user.realName}</div>
                  <div className='phone'>{this.props.user.phone}</div>
               </div>
              <NavLink to='/my' ><div className='settings'> </div></NavLink>
          </div>)
     }
}

export default connect(state=>({user:state.userAvatar}),{userDetail})(Avatar)
