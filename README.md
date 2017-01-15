# Angular-Simple-Translate

[![npm version](https://badge.fury.io/js/angular-simple-translate.svg)](https://badge.fury.io/js/angular-simple-translate)  

Simple translate module for Angular 2 based on a blog post by Jecelyn Yeen (chybie). Features include support for fallback language, nested objects and interpolation.

## Installation & Setup

### #1 Install package with npm

```bash
npm install angular-simple-translate
```

### #2 Import TranslateModule

```typescript
import { TranslateModule } from 'angular-simple-translate';
...
@NgModule({
    imports: [
        TranslateModule,
        ...
    ],
    ...
})
export class YourModule { }
```

### #3 Create one or more language files

`en.ts`

```typescript test.ts
export const EN = {
    "app": {
        "title": "Angular-Simple-Translate Beispiel",
        "greet": "Hello, %0 %1"
    }
};
```

`de.ts`

```typescript
export const DE = {
    "app": {
        "title": "Angular-Simple-Translate Beispiel",
        "greet": "Hallo, %0 %1"
    }
};
```

### #4 Export translations as dictionary

`translations.ts`

```typescript
import { EN } from './en';
import { DE } from './de';

export const TRANSLATIONS = {
    "en" : EN,
    "de" : DE
}
```

### #5 Configure TranslateService in your component

`app.component.ts`

```typescript
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
```

## Usage

## Usage in html template

```html
<h1>
  {{ 'app.title' | translate }}
</h1>
{{ 'app.greet' | translate:['John', 'Doe'] }}
```

## Usage in typescript

```typescript
var title = this._translateService.instant('app.title');
var greeting = this._translateService.instant('app.greet', ['John', 'Doe']);
```

## Run Demo App

You can try out the Datepicker in the demo app built with [Angular-CLI](https://github.com/angular/angular-cli). 

### #1 To start the demo app clone or download the repo.

### #2 Install the latest version of Angular-CLI

```bash
npm install -g angular-cli@latest
```

### #3 Install npm packages

```bash
npm install
```

### #4 Run the app

```bash
ng serve
```

### #5 Open the app

[http://localhost:4200/](http://localhost:4200/)

## License

MIT