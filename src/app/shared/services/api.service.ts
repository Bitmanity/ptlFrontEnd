import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Headers,Http } from '@angular/http';
import { tokenGetter } from '../../app.module';

// export const address= 'http://127.0.0.1:8000/api/';
export const address= 'http://clarusinfo.com/apis/public/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



post(url,data)
{
	return new Promise((resolve,reject)=>{
		return this.http.post(address+url,data, {headers:{'Authorization':'Bearer '+localStorage.getItem('x-auth-token')}}).subscribe(
			data=>{
				resolve(data);
			},
			error=>{	
				reject(error);
			});
	});
}
get(url)
{
	return new Promise((resolve,reject)=>{
		return this.http.get(address+url,{headers:{'Authorization':'Bearer '+localStorage.getItem('x-auth-token')}}).subscribe(
			data=>{
				resolve(data);
			},
			error=>{
				reject(error)
			}
		)
	})
}
// loginUser(user)
// {
// 	return new Promise((resolve,reject)=>{
// 		return this.http.post(url+'auth/login',user).subscribe(
// 			data=>{
// 				if (data.status) {
// 				resolve(data);
// 				}
// 				else{
// 					reject(data);
// 				}
// 			},
// 			error=>{
// 				console.log('Error in User Registration');
// 				reject(error);
// 			}

// 			);
// 	});
// }
}
