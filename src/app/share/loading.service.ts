import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public spinner$: Subject<any>;

  constructor() {
    this.spinner$ = new Subject<any>();
  }

  showSpinner() {
    this.spinner$.next(true);
  }

  hideSpinner() {
    this.spinner$.next(false);
  }

  //how to use 
  // 1 Oninit 
  // this.loadingService.spinner$.subscribe((data: boolean) => {
  //   this.showLoading = data;
  // });
  // 
  // 2.show
  // this.loadingService.showSpinner();
  // 3.hide
  // this.loadingService.hideSpinner();
}
