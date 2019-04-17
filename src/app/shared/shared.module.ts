import {NgModule} from '@angular/core';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbButtonsModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';


export  const BOOSTRAP_MODULE= [
  NgbAlertModule,
  NgbButtonsModule,
  NgbAccordionModule,
  NgbCarouselModule,
  NgbCollapseModule,
  NgbPaginationModule,
];
@NgModule({
  imports:[BOOSTRAP_MODULE],
  exports:[BOOSTRAP_MODULE],
  declarations:[],
  providers:[],
  bootstrap:[]
})
export class SharedModule{

}
