import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  word = '';
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  search(): void {
    this.onEnter.emit(this.word);
  }

  keyUp(): void {
   this.debouncer.next(this.word);
  }

}
