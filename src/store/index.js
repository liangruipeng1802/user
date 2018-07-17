import {createStore,combineReducers} from 'redux' 
import kinddata from './kind.js'
import cartdata from './cart.js'
//combineReducers ------>  redux中间件
const reducer =combineReducers({
	kinddata,
	cartdata
})
const store =createStore(reducer)   
export default store