import { Observable, Subject } from 'rxjs';

import { AppModule } from '../app.module';
import { LoggerService } from './logger.service';

export class RsmElTitleToRsmElCommService {

  private logger: LoggerService;
  public rsmElTitleToRsmEl: Observable<void>;
  private rsmElTitleToRsmElSource: Subject<void>;

  constructor() {
    this.logger = AppModule.injector.get(LoggerService);
    this.rsmElTitleToRsmElSource = new Subject<void>();
    this.rsmElTitleToRsmEl = this.rsmElTitleToRsmElSource.asObservable();
  }

  public showRsmEl(): void {
    this.logger.debug("RsmElTitleToRsmElCommService", "showRsmEl", "Start");
    this.rsmElTitleToRsmElSource.next();
    this.logger.debug("RsmElTitleToRsmElCommService", "showRsmEl", "Finish");
  }
}
