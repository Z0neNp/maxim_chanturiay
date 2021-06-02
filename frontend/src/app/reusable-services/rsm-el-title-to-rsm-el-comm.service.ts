import { Observable, Subject } from 'rxjs';

import { RsmElState } from "../reusable-enums/rsm-el-state";

export class RsmElTitleToRsmElCommService {

  public rsmElTitleToRsmEl: Observable<RsmElState>;
  private rsmElTitleToRsmElSource: Subject<RsmElState>;

  constructor() {
    this.rsmElTitleToRsmElSource = new Subject<RsmElState>();
    this.rsmElTitleToRsmEl = this.rsmElTitleToRsmElSource.asObservable();
  }

  public showRsmEl(): void {
    this.rsmElTitleToRsmElSource.next(RsmElState.SHOWN);
  }

  public doNotShowRsmEl(): void {
    this.rsmElTitleToRsmElSource.next(RsmElState.NOT_SHOWN);
  }
}
