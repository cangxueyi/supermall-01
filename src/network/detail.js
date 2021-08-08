import request from './request.js';

export function getDetail(text){
	return request({
		url:'/detail',
		params:{
			text
		}
	})
}