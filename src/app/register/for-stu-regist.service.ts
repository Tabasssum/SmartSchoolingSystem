import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForStuRegistService {
  name: string;
  Sid: string;
  age: number;
  fname: string;
  fid: number;
  class: number;

  constructor() { }

  getName(){
    return this.name;
  }
  setName(name:string){
    this.name = name;
  }

  getSid(){
    return this.Sid;
  }
  setSid(Sid:string){
    this.Sid = Sid;
  }

  getAge(){
    return this.age;
  }
  setAge(age:number){
    this.age = age;
  }

  getFname(){
    return this.fname;
  }
  setFname(fname:string){
    this.fname = fname;
  }

  getFid(){
    return this.fid;
  }
  setFid(fid:number){
    this.fid = fid;
  }

  getClass(){
    return this.class;
  }
  setClass(classs:number){
    this.class = classs;
  }

}
