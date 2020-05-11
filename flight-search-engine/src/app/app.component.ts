import { Component, ViewChild, OnInit } from "@angular/core";
import { NavigationStart, Router, NavigationEnd, NavigationCancel, NavigationError, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  loading: boolean = false;
  param = { value: 'world' }

  constructor(
    private router: Router,
    translate: TranslateService,
    private languageService: LanguageService
    ) {
    
    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
            case event instanceof NavigationError: {
              this.loading = false;
              break;
            }
            default: {
              break;
            }
      }
    });
  }

  // ngOnInit() {
  //   this.languageService.setInitialAppLanguage()
  // }

  ngOnInit() {
    this.languageService.setLanguge('cn')
  }

}
