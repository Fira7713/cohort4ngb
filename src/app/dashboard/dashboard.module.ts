import {NgModule} from '@angular/core';
import {ExamplePage} from './example/example.page';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [],
  declarations: [
    ExamplePage,

  ],
  providers: [],
  bootstrap: [],
  entryComponents: [],
})

export class DashboardModule {

}
