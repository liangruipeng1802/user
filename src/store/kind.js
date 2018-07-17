const kinddata = (state={
	kindmenulist:[],
	kindlist:[]
},{type,data})=>{
	switch(type){
		case 'KIND_MENU_LIST':
			state.kindmenulist=data
			return state;
		case 'kIND_LIST':
			state.kindlist=data
			return state;
		default:
			return state;
	}
}
export default kinddata
