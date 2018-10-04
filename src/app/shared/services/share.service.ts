import { Injectable, EventEmitter, HostListener } from '@angular/core';
import { PlatformLocation } from '@angular/common'


export const ROLES = {

	GUEST : 0,
	SYSTEM : 1,
	ADMIN : 2,
	MANAGER : 3,
	COMPANY : 4,
	VIEWER : 5
}
// visible:boolean = false;
let visible:boolean = false;

@Injectable()
export class ShareService {
	private data = {};
	constructor(location: PlatformLocation) { 
		
	}

	set(key,value){
		this.data[key] = value;
	}

	get(key){
		return this.data[key];
	}
	
	getApiPath(){
		 return "http://127.0.0.1:8000/api/";
		//return "http://api.astrawealth.in/public/api/";
	}
	setCurrentUser(currentUser){
		this.set("__currentUser__",currentUser);
	}
	getCurrentUser(){
		return this.get("__currentUser__")||false ;
	}
	isLoggedIn(){
		return !!this.getCurrentUser();
	}
	getVisiblity(){
		return visible;
	}
	setVisibility( value:boolean){
		visible = value;
	}
}