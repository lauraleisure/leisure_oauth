import React,{Component} from 'react'

export default class Loading extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillReceiveProps(nextProps) {

    }
     render(){
          return (<div className='loadingPage'>
              <div className='loading-img'> </div>
              <div>加载中...</div>
          </div>)
     }
}


