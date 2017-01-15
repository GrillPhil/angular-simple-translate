import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate';
import { TRANSLATIONS } from './resources/translations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private readonly _translateService: TranslateService;

  constructor(translateService: TranslateService) {
    this._translateService = translateService;
  }
  
  ngOnInit() {
    this._translateService.init(TRANSLATIONS, navigator.language, 'en', true);
  }
}
