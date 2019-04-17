import {NgModule} from '@angular/core';
import {ExamplePage} from './example/example.page';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports:[SharedModule],
  exports:[],
  declarations:[ExamplePage],
  providers:[],
  bootstrap:[],
  entryComponents:[],
})

export class DashboardModule {

}
