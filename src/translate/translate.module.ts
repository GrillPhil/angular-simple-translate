import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { TranslateService} from './translate.service';

@NgModule({
  declarations: [
    TranslatePipe
  ],
  exports: [
    TranslatePipe
  ],
  providers: [
    TranslateService
  ]
})
export class TranslateModule { }
