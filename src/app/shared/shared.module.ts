import {NgModule} from '@angular/core';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule, NgbCarouselModule,
  NgbCollapseModule, NgbDatepickerModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,} from '@angular/forms';


export const BOOTSTRAP_MODULE = [
  NgbAlertModule,
  NgbButtonsModule,
  NgbAccordionModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbPaginationModule,
  NgbDatepickerModule,

];
@NgModule({
  imports: [
    FormsModule,
    BOOTSTRAP_MODULE
  ],
  exports: [
    FormsModule,
    BOOTSTRAP_MODULE,
  ],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class SharedModule {

}
