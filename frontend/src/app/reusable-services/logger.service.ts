import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private active: boolean = false;

  constructor() {
    this.active = true;
  }

  public debug(class_name: String, method_name: String, msg: String): void {
    if (this.active) 
      console.debug(`DEBUG -- ${class_name} -- ${method_name}() -- ${msg}`);
  }

  public error(class_name: String, method_name: String, msg: String): void {
    if (this.active) 
      console.error(`ERROR -- ${class_name} -- ${method_name}() -- ${msg}`);
  }
}
