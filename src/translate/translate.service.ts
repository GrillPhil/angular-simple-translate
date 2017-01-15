import { Injectable, Inject, EventEmitter } from '@angular/core';
const { flatten } = require('flat');

@Injectable()
export class TranslateService {

    private readonly PLACEHOLDER = '%';
    private _translations: any;
    private _defaultLang: string;
    private _currentLang: string;
    public onLangChanged: EventEmitter<string> = new EventEmitter<string>();

    public get currentLang() {
        return this._currentLang || this._defaultLang;
    }

    public init(translations:any, useLanguage: string, defaultLanugage:string = null) {
        this._translations = this.setTranslations(translations);
        this.use(useLanguage);
        if (defaultLanugage !== null) {
            this.setDefaultLang(defaultLanugage);
        }
    }

    private setTranslations(translations: any) {
        for (let language in translations) {
            if (translations.hasOwnProperty(language)) {
                translations[language] = flatten(translations[language]);
            }
        }
        return  translations;
    }

    public setDefaultLang(lang: string) {
        this._defaultLang = lang;
    }

    public use(lang: string): void {
        this._currentLang = lang;
        this.onLangChanged.emit(lang);
    }

    private translate(key: string): string {
        let translation = key;

        if (this._translations[this.currentLang] && this._translations[this.currentLang][key]) {
            return this._translations[this.currentLang][key];
        }

        if (!this._defaultLang) { 
            return translation;
        }

        if (this._translations[this._defaultLang] && this._translations[this._defaultLang][key]) {
            return this._translations[this._defaultLang][key];
        }

        return translation;
    }

    public replace(word: string = '', words: string | string[] = '') {
        let translation: string = word;

        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace(this.PLACEHOLDER.concat(<any>i), e);
        });

        return translation;
    }

    public instant(key: string, words?: string | string[]): string {
        const translation = this.translate(key);

        if (!words) return  translation;;

        return this.replace(translation, words);
    }
}