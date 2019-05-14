import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";


import './crumb.css'

class Crumb extends Component{
    static propTypes={
        hasGoBack:PropTypes.bool.isRequired,
        hasLogout:PropTypes.bool.isRequired,
        title:PropTypes.string,
        backUrl:PropTypes.string,
    }
    goBack=()=>{
        this.props.backUrl?window.location.href=this.props.backUrl:window.history.go(-1);
    }
    logout=()=>{
        window.location.href='/login';
    }
     render(){
         return (<div className='crumb-part flex-box jc-s ai-c'>
             <div  className={this.props.hasGoBack?'goBack':''} onClick={this.props.hasGoBack?this.goBack:null}> </div>
             <div className='crumb-title'>{this.props.title}</div>
             <div className='crumb-logout' onClick={this.props.hasLogout?this.logout:null}>{this.props.hasLogout?'退出':''}</div>
         </div>)
     }
}

export default connect(state=>({title:state.crumbs.title,hasGoBack:state.crumbs.hasGoBack,hasLogout:state.crumbs.hasLogout,backUrl:state.crumbs.backUrl}),
    null)(Crumb)
