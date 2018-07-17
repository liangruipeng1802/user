import React,{Component} from 'react'
import kindApi from '@/api/kind.js'
import {Link,NavLink} from 'react-router-dom'
import tool from '@/tool/index.js'
import store from '@/store/index.js'
import Loading from '@/uicom/Loading.jsx'
class Kind extends Component{
	constructor(props){
		super(props);
		this.getData=this.getData.bind(this)
		this.state={
			//activeIndex: sessionStorage.classID ? sessionStorage.classID-1 : 0, //已删掉
//			activeIndex------>看看进入页面显示的哪个分类,让其颜色改变
			kindlist:[],
			isLoading:'none'
		}
	}
	componentDidMount(){
		kindApi.getData((data)=>{
			console.log(data)
			store.dispatch({
				type:'KIND_MENU_LIST',
				data: data
			})
		})
		//console.log(this.props.match.params.classID)
		var classID=this.props.match.params['classID']
		tool.backTop()
		
		
		this.getData(classID)
	}
	componentWillReceiveProps(nextProps){
		//console.log('nextProps',nextProps)
		const classID=nextProps.match.params.classID
		this.getData(classID)
	}
	getData(classID){
		this.setState({
			isLoading:'block'
		})
		kindApi.getListData(classID,(data)=>{
			store.dispatch({
				type:'kIND_LIST',
				data:data, 
			})
			this.setState({
				isLoading:'none'
			})
		})
		
	}
//	changeList(index,classID){
//		sessionStorage.classID=classID
//		this.setState({
//			activeIndex:index
//		})
//		var classID = sessionStorage.classID ? sessionStorage.classID : 1
//		this.getData(classID)
//	}
	back(){
		this.props.history.goBack()
	}
	render(){
		var arr=[]
		const kindlist=store.getState().kinddata.kindlist
//		console.log('kindlist',kindlist)
		if(kindlist===0){
			arr='暂无数据'
		}else{
			kindlist.map((item,index)=>{
				arr.push(
					<Link key={item.goodsID} to={'/detail/'+item.goodsID}>
						<li>
							<img src={item.goodsListImg} />
							<div className="proinfo">
								{item.goodsName}
							</div>
							
						</li>
					</Link>
				)
			})
		}
		return (
			<div className="container">
				<div className="main">
					<header>
						<div className="left" onClick={this.back.bind(this)}>
							返回
						</div>
						<div className="center">
							分类
						</div>
						<div className="right">
							分享
						</div>
					</header>
					<div className = 'content kindContent'>
						<ul className='kindMenu'>
							{
								store.getState().kinddata.kindmenulist.map((item,index)=>(
									<li className={this.state.activeIndex===index ? 'active' : ''} key={item.classID}>
									<NavLink to={'/kind/'+item.classID}>{item.className}</NavLink>
									</li>
								))
							}
						</ul>
						<div className='kindList'>
							<ul className="prolist">
								{
									arr
								}
							</ul>
							<button id='backTop' className="homeBtn">回到顶部</button>
						</div>
					</div>
				</div>
				<Loading display={this.state.isLoading}/>
			</div>
		)
	}
}
export default Kind
