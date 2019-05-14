import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import  Q from 'q';

import Layout from '../../component/page_layout/layout/layout'
import Loading from '../../component/page_layout/loading/loading'

import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {myNav} from '../../component/page_layout/nav/redux/actionCreators'
import './user.css'

class UserDetail extends Component{
    state={
        realName:'Leisure',
        sex:'female',
        phone:'18162779238',
        photo:'/images/user/user.jpg',
        code:'',
        pwd:'',
        repwd:'',
        loading:true
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
            this.props.setCrumb({title:'个人信息',hasGoBack:true,hasLogout:true}),
            this.props.setLayout({
                showCrumb:true,
                showNav:true
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
                                 <div className='txt-title'>头像</div>
                                 <div className='txt-cont photo'><img src={this.props.user.photo} alt=""/></div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>姓名</div>
                                 <div className='txt-cont'>{this.props.user.realName}</div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>性别</div>
                                 <div className='txt-cont set-sex flex-box jc-s ai-c '>
                                     <input type='radio' id='sex.male' value='male'
                                            checked={this.state.sex === 'male' ? true : false}
                                            onChange={this.changeVal.bind(this)}/>男
                                     <input type='radio' id='sex.female' value='female'
                                            checked={this.state.sex === 'female' ? true : false}
                                            onChange={this.changeVal.bind(this)}/>女
                                 </div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>手机号</div>
                                 <div className='txt-cont'>{this.props.user.phone}</div>
                             </div>
                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title '>验证码</div>
                                 <div className='txt-cont'>
                                     <input id='code' className='text-right' type='text' value={this.state.code}
                                            placeholder='短信验证码' onChange={this.changeVal.bind(this)}/>
                                     <button className='bg-blue white-text getCode'>获取验证码</button>
                                 </div>
                             </div>
                         </div>
                         <div className='item-part bg-w'>

                             <div className='items halfpxline_after flex-box jc-s ai-c'>
                                 <div className='txt-title'>设置密码</div>
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
                             <button className='submitBtn'>确认修改</button>
                         </div>
                     </div>

                 </Layout>
             )
         }
     }
}

export default connect(state=>({user:state.userDetail}),
    {setCrumb,setLayout,myNav})(UserDetail)
