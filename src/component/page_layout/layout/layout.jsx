import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Crumb from "../crumb/crumb";
import Nav from '../nav/nav'

import './layout.css'

import {connect} from "react-redux";


class Layout extends Component{
    static propTypes={
        showCrumb:PropTypes.bool,
        showNav:PropTypes.bool
    }

    render(){
        return (<div className='container noScrollDiv'>
            {this.props.showCrumb&&<Crumb />}
            {this.props.showNav?
                <Nav>
                {React.cloneElement(this.props.children)}
                 </Nav>
                :React.cloneElement(this.props.children)}
        </div>)
    }
}

export default connect(state=>({showCrumb:state.layoutConfig.showCrumb,showNav:state.layoutConfig.showNav}),
    null)(Layout)



