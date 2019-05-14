import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

/*弹出层*/
class ShadowPopups extends Component{
    static propTypes={
        layout:PropTypes.string,
        title:PropTypes.string,
    }  
     componentDidMount(){

    }
     render(){
          return (<div className='fixedDiv'>
           <div className={'fixedContent '+(this.state.layout?this.state.layout:'')}>
               {(this.state.title&&this.state.title!=='')&&<div className='title'></div>}
               <div className='cont'>{React.cloneElement(this.props.children)}</div>
               <div className='button'></div>
             </div>
          </div>)
     }
}

export default connect(state=>({title:state}),
    null)(ShadowPopups)
