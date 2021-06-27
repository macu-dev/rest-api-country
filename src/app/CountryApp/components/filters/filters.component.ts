import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {

  @Input() regions: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
