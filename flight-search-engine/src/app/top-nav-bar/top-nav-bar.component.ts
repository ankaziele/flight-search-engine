import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  navbarOpened: boolean = false;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened
  }

  changeLanguage(lng) {
    this.languageService.setLanguge(lng)
  }

}
