import React,{Component} from 'react'
import detailApi from '@/api/detail.js'
import {Link} from 'react-router-dom'
class Detail extends Component{
	constructor(props){
		super(props);
		this.state={
			goodsListImg:'',
			goodsID:'',
			goodsName:'',
			price:'',
			number:''
		}
	}
	back(){
		this.props.history.goBack()
	}
	componentDidMount(){
		console.log(this.props.match.params.goodsID)
		const goodsID=this.props.match.params.goodsID;
		detailApi.getData(goodsID,({goodsListImg,goodsID,goodsName,price,number})=>{
	 		this.setState({
	 			goodsListImg,goodsID,goodsName,price,number
	 		})
		})
	}
	addCart(){
		if(localStorage.getItem('isLogin')==1){
			const userID=localStorage.getItem('userID');
			const goodsID=this.props.match.params.goodsID;
			const number=1;
			detailApi.addCart({userID,goodsID,number},(data)=>{
				console.log(data)
				if(data==1){
					alert('添加成功')
				}else{
					alert('添加失败')
				}
			})
		}else{
			this.props.history.push('/login')
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
							详情
						</div>
						<div className="right">
							分享
						</div>
					</header>
					<div className="content">
						<img src={this.state.goodsListImg} className="DetailImg"/>
						<p>{this.state.goodsName}</p>
						
					</div>
					<footer>
						<button onClick={this.addCart.bind(this)}>加入购物车</button>
						<Link to='/cart'><button>查看购物车</button></Link>
					</footer>
				</div>
			</div>
		)
	}
}
export default Detail
