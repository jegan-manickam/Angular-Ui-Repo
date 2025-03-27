import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export const ModifyService:any =  {

  setvalue: [],

  valueUpdate(arg:any) {
    this.setvalue.splice(0, 1, arg)
    //this.setvalue.push(arg);
  }
}
