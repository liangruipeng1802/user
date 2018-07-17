import React,{Component} from 'react'
class Loading extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='loadingBox' style={{display:this.props.display}}>
				加载中...
			</div>
			
		)
	}
}
export default Loading;