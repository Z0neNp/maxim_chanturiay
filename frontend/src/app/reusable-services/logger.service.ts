import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  public debug(class_name: String, method_name: String, msg: String): void {
    if (environment.logger.debug) 
      console.debug(`DEBUG -- ${class_name} -- ${method_name}() -- ${msg}`);
  }

  public error(class_name: String, method_name: String, msg: String): void {
    console.error(`ERROR -- ${class_name} -- ${method_name}() -- ${msg}`);
  }
}
