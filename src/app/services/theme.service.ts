import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  body = document.body;
  config = '';

  constructor() { }

  changeDark(): void{

    if (this.config === 'true') {
      this.body.classList.remove('dark');
      this.config = 'false';
      localStorage.setItem('isDark', 'false');
    }else{
      this.body.classList.add('dark');
      localStorage.setItem('isDark', 'true');
      this.config = 'true';
    }

  }

  getConfigTheme(): void{
    this.config = localStorage.getItem('isDark') || '';

    if (this.config === 'true'){
      this.body.classList.add('dark');
    }
  }
}
