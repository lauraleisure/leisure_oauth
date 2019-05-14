import  './login.css'
import React,{Component} from 'react'
import  Q from 'q';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom'

import Layout from '../../component/page_layout/layout/layout'
import Loading from '../../component/page_layout/loading/loading'
import MessageDialog from '../../component/common/messageDialog'
import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {homeNav} from '../../component/page_layout/nav/redux/actionCreators'
import {validateLogin} from '../../component/common/redux/actionCreators'


class Login extends Component{
    state={
        loading:true,
        username:'',
        password:'',
    }
    static propTypes={
      isValid:PropTypes.bool,
    }

     componentDidMount(){
        var that=this;
         Q.all([
             that.props.homeNav(),
             that.props.setLayout({
                 showCrumb:false,
                 showNav:false
             })
         ]).then(()=>{
            return that.setState({loading:false});
        });
    }
    doLogin(){
        var that=this;
        var user={
             username:this.state.username,
             password:this.state.password
        };
       that.props.validateLogin(user);
    }

    changeVal(evt){
        var obj={};
        obj[evt.target.id]=evt.target.value;
        this.setState(obj);
    }
     render(){
        if(this.state.loading){
            return <Loading />
        }else{
            return (<Layout>
                <div className='loginPage noScrollDiv'>
                    <div className='login-part'>
                        <div className='logo '>
                        </div>
                        <div className='item text-left title'> 领先的主动营销产品</div>
                        <div className='item  text-left desc '> 挖掘营销潜力 传播无限可能 </div>
                    </div>
                    <div className='login-part'>
                        <div className='item  '>
                            <input type="text" id="username" placeholder='用户名' value={this.state.username} onChange={this.changeVal.bind(this)}/>
                        </div>
                        <div className='item  '>
                            <input type="password" id='password' placeholder='密码' value={this.state.password} onChange={this.changeVal.bind(this)}/>
                        </div>
                        <div className='item text-right  '>
                            <NavLink className='white-text register'  to='/register'>注册账号</NavLink>
                            <NavLink className='white-text'  to='/forget'>忘记密码？</NavLink>
                        </div>
                    </div>
                    <div className='login-part'>
                        <div className='item flex-box jc-c ai-c'><span className='checkBox circle checked'> </span>已阅读并同意 <b> <NavLink className='blue-text' to='/agreement'>《用户注册协议》</NavLink></b></div>
                    </div>
                    <div className='sub-btn '>
                        <button className='submitBtn' onClick={this.doLogin.bind(this)}>登录</button>
                    </div>
                    <MessageDialog />
                </div>
            </Layout>)
        }

     }
}

export default connect(state=>({username:state.login.username,password:state.login.password}),
    {setCrumb,setLayout,homeNav,validateLogin})(Login)
