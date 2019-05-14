import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import  Q from 'q';
import Layout from '../../component/page_layout/layout/layout'
import Avatar from '../../component/user/avatar'
import Loading from '../../component/page_layout/loading/loading'
import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {homeNav} from '../../component/page_layout/nav/redux/actionCreators'

import './home.css'

class Home extends Component{
    state={
        loading:true
    }
    static propTypes={
        iconList:PropTypes.array.isRequired
    }
    componentDidMount(){
        var that=this;
        Q.all([
            // this.props.setCrumb({title:'首页',hasGoBack:true,hasLogout:false}),
            that.props.homeNav(),
            that.props.setLayout({
                showCrumb:false,
                showNav:true
            })
        ]).then(()=>{
            return that.setState({loading:false});
        });
    }
     render(){
         if(this.state.loading){
             return <Loading />
         }else {
             return (<Layout>
                 <div>
                     <Avatar/>
                     <div className='icon-container'>
                         <div className='icon-wrapper flex-box jc-s ai-c'>
                             {this.props.iconList.map((icon, index) => {
                                 return <dl className='icon-item' key={index}>
                                     <dt className={'icon ' + (icon.class ? icon.class : '')}></dt>
                                     <dd className='icon-title'>{icon.title}</dd>
                                 </dl>
                             })}
                         </div>
                     </div>
                 </div>
             </Layout>)
         }
     }
}

export default connect(state=>({iconList:state.home}),
    {setCrumb,setLayout,homeNav})(Home)
