import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForAllRegisterService {
  name: string;
  id: number;
  phone: number;
  email: string;
  pass: string;

  constructor() { }

  getName(){
    return this.name;
  }
  setName(name:string){
    this.name = name;
  }

  getId(){
    return this.id;
  }
  setId(id:number){
    this.id = id;
  }

  getEmail(){
    return this.email;
  }
  setEmail(email:string){
    this.email = email;
  }
  
  getPhone(){
    return this.phone;
  }
  setPhone(phone:number){
    this.phone = phone;
  }

  getPass(){
    return this.pass;
  }
  setPass(pass:string){
    this.pass = pass;
  }
}
