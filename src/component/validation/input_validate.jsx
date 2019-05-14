import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'

class InputValidate extends Component{
    static propTypes={
        isValidate:PropTypes.bool.isRequired,
    }
     componentDidMount(){

    }
     render(){
          return (<Layout>
           <div>
          </div>
          </Layout>)
     }
}

export default connect(state=>({title:state}),
   null)(InputValidate)
