import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IItem } from '../../../shared/interfaces/item.interface';

@Injectable()
export class DashboardService {
  constructor() {}

  loadItem(itemId): Observable<IItem> {
    return Observable.create((observer) => {
      setTimeout(() => {
        observer.next({
          id: itemId,
          name: `Loaded item #${itemId}`
        });
      }, 100);
    });
  }
}
