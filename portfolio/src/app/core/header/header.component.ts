import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  private darkThemeIcon = 'nightlight_round';
  private lightThemeIcon = 'wb_sunny';
  public lightDarkToggleIcon = this.darkThemeIcon;

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' }
  ];

  toggleDarkTheme(toggle: MatSlideToggle): void {
    document.body.classList.toggle('dark-theme');
    this.lightDarkToggleIcon = toggle.checked ?  this.lightThemeIcon : this.darkThemeIcon;
  }


  constructor(private bioService: BioService, private headerService: HeaderService) { }
}