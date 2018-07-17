import React,{Component} from 'react'

import Home from '@/components/Home.jsx'
import userApi from '@/api/user.js'
class Rejister extends Component{
	constructor(props){
		super(props);
		this.state={
			userIDstate:'',
			passwordstate:'',
			clearStr:'',
			pwdStr:''
			
		}
	}
	back(){
		this.props.history.push('/login')
	}
	register(){
		var userID = this.refs.userID.value
    	var password = this.refs.password.value
   		var status = 'register'
		userApi.submitData({status,userID,password}, (data) => {
			console.log(data)
			if(data == 0){
		        alert('该用户已注册,请直接登录')
		    }else if(data == 1){
		    	this.props.history.push('/login')
		        alert('注册成功')
		    }else {
		        alert('注册失败')
		    }
		})
	}
	checkuserID(){
		var userID=this.refs.userID.value;
		if(userID.length>0){
			this.setState({
				clearStr:'清空'
			})
		}
		if(userID.length>=6){
			this.setState({
				userIDstate:'√'
			})
		}else{
			this.setState({
				userIDstate:'×'
			})
		}
	}
	clearuserID(){
		this.refs.userID.value=''
		this.setState({
			userIDstate:'',
			clearStr:''
		})
	}
	clearpassword(){
		this.refs.password.value=''
		this.setState({
			passwordstate:'',
			pwdStr:''
		})
	}
	checkPwd(){
		var val=this.refs.password.value;
		if(val.length>0){
			this.setState({
				pwdStr:'清空'
			})
		}
		if(val.length>=6){
			this.setState({
				passwordstate:'√'
			})
		}else{
			this.setState({
				passwordstate:'×'
			})
		}
	}
	render(){
		return (
			<div className="container">
				<div className="main">
					<header>
						<div className="left" onClick={this.back.bind(this)}>
							返回
						</div>
						<div className="center">
							注册
						</div>
						<div className="right">
							分享
						</div>
					</header>
					<div className="content">
						<div className='registerBob'>
						<p>
							<input type="text" placeholder='请输入你的用户名' onChange={this.checkuserID.bind(this)} ref='userID' />
							<span>{this.state.userIDstate}</span>
							<i className='del' onClick={this.clearuserID.bind(this)}>{this.state.clearStr}</i>
							
						</p>
						<p>
							<input type="password" placeholder='请输入你的密码' ref='password' onChange={this.checkPwd.bind(this)}/>
							<span>{this.state.passwordstate}</span>
							<i className='del' onClick={this.clearpassword.bind(this)}>{this.state.pwdStr}</i>
						</p>
							<div className='register' onClick={this.register.bind(this)}>注&nbsp;&nbsp;&nbsp;册</div>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Rejister
