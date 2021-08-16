import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.getConfigTheme();
  }

  onDark(): void {
    this.themeService.changeDark();
  }

}
