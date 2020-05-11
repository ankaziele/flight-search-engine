import { TranslateService } from "@ngx-translate/core";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class LanguageService {
  constructor(private translate: TranslateService) {}

  //this function we're gonna call from app component
  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
  }

  setLanguge(lng) {
    this.translate.use(lng);
  }
}
