const cartdata = (state={
	cartlist:[]
},{type,data})=>{
	switch(type){
		case 'CART_LIST':
			state.cartlist=data
			return state;
		case 'UPDATE_CART_LIST':
			const {index,number} = data
			state.cartlist[index].number=number
			return state;
		default:
			return state;
	}
}
export default cartdata
