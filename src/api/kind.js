import fetchJsonp from 'fetch-jsonp'
import {KIND_MENU_URL,KIND_LIST_URL} from '@/server/index.js'
export default {
	getData(cb){
		var kindmenu=localStorage.kindmenu
		if(kindmenu){
			var data=JSON.parse(kindmenu)
			cb(data)
			return;
		}
		console.log(111111)
		fetch( KIND_MENU_URL)
			.then(res=>res.json())
			.then(data=>{
				localStorage.kindmenu=JSON.stringify(data) //如果第一次进来将数据保存到本地
				//localStorage存储的是字符串
				cb(data)
			})
			.catch(err=>console.log(err))
	},
	getListData(classID,cb){
		//console.log('classID',classID)
		fetchJsonp( KIND_LIST_URL+"?classID="+classID)
			.then(res=>res.json())
			.then(data=>{
				cb(data)
			})
			.catch(err=>console.log(err))
	}
}
