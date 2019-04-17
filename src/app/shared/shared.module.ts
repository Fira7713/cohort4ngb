import {NgModule} from '@angular/core';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';


export const BOOT_STRAP = [
  NgbAlertModule,
  NgbButtonsModule,
  NgbAccordionModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbPaginationModule,
];
@NgModule({
  imports: [BOOT_STRAP],
  exports: [BOOT_STRAP],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class SharedModule {

}
