import { Observable, Subject } from 'rxjs';

export class RsmElTitleToRsmElTitlesCommService {

  public rsmElTitleToRsmElTitles: Observable<void>;
  private rsmElTitleToRsmElTitlesSource: Subject<void>;

  constructor() {
    this.rsmElTitleToRsmElTitlesSource = new Subject<void>();
    this.rsmElTitleToRsmElTitles = this.rsmElTitleToRsmElTitlesSource.asObservable();
  }

  public doNotShowRsmEl(): void {
    this.rsmElTitleToRsmElTitlesSource.next();
  }
}
