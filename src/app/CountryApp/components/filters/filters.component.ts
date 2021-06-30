import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {

  @Input() regions: string[] = [];
  @Input() index = 0;
  @Output() newIndex = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(index: Event): void {
    const { target } = index;
    if (target) {
      // console.log((target as HTMLSelectElement).value);
      this.newIndex.emit((target as HTMLSelectElement).value);
    }
  }

}
