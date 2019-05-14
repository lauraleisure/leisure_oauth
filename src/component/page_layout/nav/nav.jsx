import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";

import './nav.css'

class Nav extends Component{
    static propTypes={
        tabs:PropTypes.array
    }
    
     render(){
         return (<div className='pages noScrollDiv'>
             {this.props.children?React.cloneElement(this.props.children):null}
             {this.props.tabs.length>0&&<div  className='nav_container flex-box jc-s ai-c'>
                 {this.props.tabs.map((tab,index)=>{
                     return <NavLink key={index} className={'icon '+tab.class} style={{width:tab.width}} to={tab.url}>
                         <dl>
                             <dt></dt>
                             <dd>{tab.title}</dd>
                         </dl>
                     </NavLink>
                 })}
             </div>}


         </div>)
     }
}

export default connect(state=>({tabs:state.nav}), null)(Nav)
