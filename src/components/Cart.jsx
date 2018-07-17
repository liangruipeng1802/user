import React,{Component} from 'react'
import cartApi from '@/api/cart.js'
import store from '@/store/index.js'
class Cart extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		if(localStorage.getItem('isLogin')==1){
			const userID=localStorage.getItem('userID')
			console.log('userID',userID)
			cartApi.cartData(userID,(data)=>{
				console.log('data',data)
				store.dispatch({
					type:'CART_LIST',
					data
				})
			})
		}else{
			this.props.history.push('/login')
		}
		
	}
	jianNum(goodsID,index){
		const userID =localStorage.getItem('userID')
		var number=this.refs['item'+goodsID].value * 1 - 1;
		if(number<=1){
			number=1;
		}
		cartApi.updataCart({userID,goodsID,number},(data)=>{
			if(data==1){
				this.refs['item'+goodsID].value=number
				store.dispatch({
					type:'UPDATE_CART_LIST',
					data:{
						index,number
					}
				})
			}else{
				alert('添加失败')
			}
		})
	}
	addNum(goodsID,index){
		const userID =localStorage.getItem('userID')
		var number=this.refs['item'+goodsID].value * 1 + 1;
		cartApi.updataCart({userID,goodsID,number},(data)=>{
			if(data==1){
				this.refs['item'+goodsID].value=number
				store.dispatch({
					type:'UPDATE_CART_LIST',
					data:{
						index,number
					}
				})
			}else{
				alert('添加失败')
			}
		})
	}
	render(){
		var arr=[];
		var cartlist=store.getState().cartdata.cartlist;
		console.log(store.getState())
		if(cartlist == 0){
			arr='暂无数据'
		}else{
			cartlist.map((item,index)=>{
				arr.push(
					<li key={item.goodsID}>
						<img src={item.goodsListImg} />
						<div className="proinfo">
							{item.goodsName}
							<p className="num">
								<button onClick={this.jianNum.bind(this,item.goodsID,index)}>-</button>
								<input ref={'item'+item.goodsID} defaultValue={item.number} />
								<button onClick={this.addNum.bind(this,item.goodsID,index)}>+</button>
							</p>
						</div>
					</li>
				)
			})
		}
		
		return (
			<div className="container">
				<div className="main">
					<header>
						<div className="center">
							购物车
						</div>
					</header>
					<div className="content">
						<ul className="prolist">
							{
								arr
							}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Cart
