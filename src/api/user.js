import fetchJsonp from 'fetch-jsonp'
import {LOGIN_REGISTER} from '@/server/index.js'
export default {
	submitData({status,userID,password},cb){
		fetch( LOGIN_REGISTER + '?status=' + status+'&userID='+userID+'&password='+password)
			.then(res=>res.json())
			.then(data=>cb(data))
			.catch(err=>console.log(err))
	}
}
