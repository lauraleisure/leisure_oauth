import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";

import Layout from '../../component/page_layout/layout/layout'
import {setCrumb} from '../../component/page_layout/crumb/redux/actionCreators'
import {setLayout} from '../../component/page_layout/layout/redux/actionCreators'
import {myNav} from '../../component/page_layout/nav/redux/actionCreators'


class Agreement extends Component{
    state={
        phone:'',
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
        this.props.setCrumb({title:'用户注册协议',hasGoBack:true,hasLogout:false});
       this.props.setLayout({
           showCrumb:true,
           showNav:false
       });
       this.props.myNav();
    }
     render(){
         return (<Layout>
                  <div className='agreementPage bg-w halfpxline_before noScrollDiv'>
                    {/*  <div className='item-p'><h3>用户注册协议</h3></div>*/}
                    <div className='scrollDiv'>
                      <div className='item-p'>
                          <p className='text-left'>本《平台用户注册协议》（以下简称“本协议”）是xxx平台的经营者xxx有限公司（以下简称“xxx”或者“我们”），与用户（以下简称“您”），共同缔结的对双方(包括经您授权开通并使用商家用户子账户的贵方员工)具有约束力的有效契约。</p>
                      </div>
                      <div className='item-p'>
                          <p className='text-left title'>一、 注册、账户和实名认证</p>
                          <p className='text-left'>本《平台用户注册协议》（以下简称“本协议”）是xxx平台的经营者xxx有限公司（以下简称“xxx”或者“我们”），与用户（以下简称“您”），共同缔结的对双方(包括经您授权开通并使用商家用户子账户的贵方员工)具有约束力的有效契约。</p>
                      </div>
                        <div className='item-p'>
                            <p className='text-left title'>二、 注册、账户和实名认证</p>
                            <p className='text-left'>本《平台用户注册协议》（以下简称“本协议”）是xxx平台的经营者xxx有限公司（以下简称“xxx”或者“我们”），与用户（以下简称“您”），共同缔结的对双方(包括经您授权开通并使用商家用户子账户的贵方员工)具有约束力的有效契约。</p>
                        </div>
                        <div className='item-p'>
                            <p className='text-left title'>三、 注册、账户和实名认证</p>
                            <p className='text-left'>本《平台用户注册协议》（以下简称“本协议”）是xxx平台的经营者xxx有限公司（以下简称“xxx”或者“我们”），与用户（以下简称“您”），共同缔结的对双方(包括经您授权开通并使用商家用户子账户的贵方员工)具有约束力的有效契约。</p>
                        </div>
                    </div>
                  </div>
             </Layout>
           )
     }
}

export default connect(state=>({user:state.userDetail}),
    {setCrumb,setLayout,myNav})(Agreement)
