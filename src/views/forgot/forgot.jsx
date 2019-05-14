import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import  Q from 'q';

import Layout from '../../component/page_layout/layout/layout'
import Loading from '../../component/page_layout/loading/loading'

import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {myNav} from '../../component/page_layout/nav/redux/actionCreators'


class UserDetail extends Component{
    state={
        phone:'',
        code:'',
        pwd:'',
        repwd:'',
        loading:true,
    }
    static propTypes={
        user:PropTypes.object.isRequired,
    }
    changeVal(evt){
        var obj={};
        if(evt.target.id.indexOf('.')!==-1){
            var arr=evt.target.id.split('.');
            obj[arr[0]]=arr[1];
        }else{
            obj[evt.target.id]=evt.target.value;
        }

        this.setState(obj);
    }
    componentDidMount(){

        var that=this;
        Q.all([
            this.props.setCrumb({title:'找回密码',hasGoBack:true,hasLogout:false}),
        this.props.setLayout({
            showCrumb:true,
            showNav:false
        }),
        this.props.myNav()
        ]).then(()=>{
            return that.setState({loading:false});
        });
    }
     render(){
         if(this.state.loading){
             return <Loading />
         }else {
             return (<Layout>
                     <div className='user-wrapper'>
                         <div className='item-part bg-w'>
                             <div className='items halfpxline_before halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>手机号</div>
                                 <div className='txt-cont'>
                                     <input id='phone' className='text-right' type='text' value={this.state.phone}
                                            placeholder='输入手机号' onChange={this.changeVal.bind(this)}/>
                                 </div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title '>校验码</div>
                                 <div className='txt-cont flex-box jc-s ai-c'>
                                     <input id='validateCode' className='text-right' type='text' value={this.state.code}
                                            placeholder='输入校验码' onChange={this.changeVal.bind(this)}/>
                                     <button className='bg-blue white-text getCode'>校验码</button>
                                 </div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title '>验证码</div>
                                 <div className='txt-cont flex-box jc-s ai-c'>
                                     <input id='code' className='text-right' type='text' value={this.state.code}
                                            placeholder='短信验证码' onChange={this.changeVal.bind(this)}/>
                                     <button className='bg-blue white-text getCode'>获取验证码</button>
                                 </div>
                             </div>
                         </div>
                         <div className='item-part bg-w'>

                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>新密码</div>
                                 <div className='txt-cont'><input id='pwd' className='text-right' type='password'
                                                                  value={this.state.pwd} placeholder='填写登录密码'
                                                                  onChange={this.changeVal.bind(this)}/></div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>确认密码</div>
                                 <div className='txt-cont'><input id='repwd' className='text-right' type='password'
                                                                  value={this.state.repwd} placeholder='再次输入密码'
                                                                  onChange={this.changeVal.bind(this)}/></div>
                             </div>
                         </div>
                         <div className='item-part sub-btn'>
                             <button className='submitBtn'>提交</button>
                         </div>
                     </div>

                 </Layout>
             )
         }
     }
}

export default connect(state=>({user:state.userDetail}),
    {setCrumb,setLayout,myNav})(UserDetail)
