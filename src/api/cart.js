import fetchJsonp from 'fetch-jsonp'
import {GET_CAR_LIST__URL,ADD_UPDATE_CART_URL} from '@/server/index.js'
export default {
	cartData(userID,cb){
		fetchJsonp( GET_CAR_LIST__URL + '?userID='+userID)
			.then(res=>res.json())
			.then(data=>cb(data))
			.catch(err=>console.log(err))
	},
	updataCart({userID,goodsID},cb){
		fetch( ADD_UPDATE_CART_URL + '?userID='+userID+'&goodsID='+goodsID)
			.then(res=>res.json())
			.then(data=>cb(data))
			.catch(err=>console.log(err))
	}
}
