import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private deBouncer: Subject<string> = new Subject<string>();
  private deBouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  /*@Output()
  public onValue: EventEmitter<string> = new EventEmitter<string>();*/

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  /*emitValue(value: string){
    this.onValue.emit( value )
  }*/

  onKeyPress( searchTerm: string ){
    this.deBouncer.next( searchTerm )
  }

  ngOnInit(): void {
    this.deBouncerSubscription = this.deBouncer
    .pipe(
      debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      })
    }

    ngOnDestroy(): void {
      this.deBouncerSubscription?.unsubscribe()
    }

  }

