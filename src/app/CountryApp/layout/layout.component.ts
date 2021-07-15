import { Component, AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

   // tslint:disable-next-line: use-lifecycle-interface
   ngAfterViewInit(): void {
    const loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
  }

}


