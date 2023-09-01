import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  /**
   * Constructor
   *
   * @param {Router} _router
   * @param _route
   */
  constructor(private _router: Router, private _route: ActivatedRoute) {
    // Initialize the service
    this._init();
  }

  public _visible!: BehaviorSubject<boolean>;

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Buffer value
   */
  // get bufferValue(): Observable<any> {
  //   return this._bufferValue.asObservable();
  // }

  // setBufferValue(value: number): void {
  //   this._bufferValue.next(value);
  // }

  /**
   * Mode
   */
  // get mode(): Observable<any> {
  //   return this._mode.asObservable();
  // }

  // setMode(value: 'determinate' | 'indeterminate' | 'buffer' | 'query'): void {
  //   this._mode.next(value);
  // }

  /**
   * Value
   */
  // get value(): Observable<any> {
  //   return this._value.asObservable();
  // }

  // setValue(value: number): void {
  //   this._value.next(value);
  // }

  /**
   * Visible
   */
  get visible(): Observable<any> {
    return this._visible.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the progress bar
   */
  show(): void {
    this._visible.next(true);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Hide the progress bar
   */
  hide(): void {
    this._visible.next(false);
  }

  /**
   * Initialize
   *
   * @private
   */
  private _init(): void {
    // Initialize the behavior subjects
    // this._bufferValue = new BehaviorSubject(0);
    // this._mode = new BehaviorSubject('indeterminate');
    // this._value = new BehaviorSubject(0);
    this._visible = new BehaviorSubject(true);

    // Subscribe to the router events to show/hide the loading bar
    this._router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((data: any) => {
        const value: string = data.url;
        const notSpinner = value.indexOf('notSpinner');
        if (notSpinner === -1) {
          this.show();
        }

      });

    this._router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd
            || event instanceof NavigationError
            || event instanceof NavigationCancel
        )
      )
      .subscribe(() => {
        setTimeout(() => {
          this.hide();
        });
      });
  }
}
