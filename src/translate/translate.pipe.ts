import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate'
})
export class TranslatePipe implements PipeTransform {

    private readonly _translateService: TranslateService;

    constructor(translateService: TranslateService) {
        this._translateService = translateService;
     }

    transform(value: string, args: string | string[]): any {
        if (!value) return;
        return this._translateService.instant(value, args);
    }
}